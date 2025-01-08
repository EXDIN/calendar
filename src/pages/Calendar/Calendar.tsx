import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { addHoliday, updateTaskDate, updateTaskOrder } from '../../store/tasks/tasks.slice';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from "./Calendar.module.css"
import { useEffect, useState } from 'react';
import { generateCalendar } from '../../helpers/generate-calendar';
import { ApiURL, months, weekDays } from "../../constants/date";
import { Smile, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import AddTask from './AddTask/AddTask';
import EditTask from './EditTask/EditTask';
import { yesterday } from '../../helpers/day';
import { holidayDTO } from '../../types';
import { ArrowsBut, CalendHeader, DaysListWrap, FilterInput, HeaderCentrWrap, HeaderTitle, NamesDaysList, WrapperDiv } from './Calendar.styles';


function Calendar() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const [currentMonth, setCurrentMonth] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const calendarDays = generateCalendar(2025, currentMonth);

    useEffect(() => {
        const getHolidays = async () => {
            await fetch(ApiURL)
                .then(response => response.json())
                .then(holidays => {
                    holidays.map((holiday: holidayDTO) => {
                        dispatch(addHoliday({
                            id: holiday.date,
                            date: yesterday(holiday.date),
                            description: holiday.name
                        }));
                    });
                })
                .catch(e => console.log(e));
        }
        getHolidays();
    }, [])

    const onLeftArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currentMonth > 0) {
            setCurrentMonth(currentMonth - 1);
        }
    }
    const onRightArrow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currentMonth < 11) {
            setCurrentMonth(currentMonth + 1);
        }
    }

    const handleDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId !== source.droppableId) {
            dispatch(updateTaskDate({
                id: draggableId,
                newDate: destination.droppableId,
            }));
        }

        if (destination.droppableId === source.droppableId && destination.index !== source.index) {
            dispatch(updateTaskOrder({
                id: draggableId,
                date: destination.droppableId,
                newIndex: destination.index,
            }));
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <WrapperDiv>
                <CalendHeader>
                    <FilterInput
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Filter..."
                    />
                    <HeaderCentrWrap>
                        <ArrowsBut onClick={onLeftArrow}><SquareChevronLeft /></ArrowsBut>
                        <HeaderTitle>{"2025 - " + months[currentMonth]}</HeaderTitle>
                        <ArrowsBut onClick={onRightArrow}><SquareChevronRight /></ArrowsBut>
                    </HeaderCentrWrap>
                    <AddTask />
                </CalendHeader>
                <NamesDaysList>
                    {weekDays.map(day => <li key={day}><h3>{day}</h3></li>)}
                </NamesDaysList>
                <DaysListWrap>
                    {calendarDays.map((day, index) => (
                        <Droppable droppableId={day ? day.toISOString().split('T')[0] : `${index}`}>
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={day ? styles.day : ""}
                                >
                                    {day ? day.getDate() : ""}
                                    {tasks
                                        .filter(task => task.date === (day ? day.toISOString().split('T')[0] : null))
                                        .map((task, idx) => (
                                            <Draggable draggableId={task.id} index={idx} key={task.id} isDragDisabled={task.isHoliday}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`${styles.task} ${searchQuery && task.description.toLowerCase().includes(searchQuery.toLowerCase()) ? styles.searchTask : ''} ${task.isHoliday ? styles.holiday : ""}`}
                                                    >
                                                        <span>{task.description}</span>
                                                        {task.isHoliday ? <Smile /> : <EditTask task={task}></EditTask>}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DaysListWrap>
            </WrapperDiv>
        </DragDropContext>
    );
}

export default Calendar;
