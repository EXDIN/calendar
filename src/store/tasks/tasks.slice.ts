import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../../types';


const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        addHoliday: (state, action: PayloadAction<Task>) => {
            state.tasks.push({ 
                ...action.payload, 
                isHoliday: true 
            });
        },
        updateTaskDate: (state, action: PayloadAction<{ id: string; newDate: string; }>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.date = action.payload.newDate;
            }
        },
        updateTask: (state, action: PayloadAction<{ id: string; newDate: string; newDescription: string; }>) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            if (task) {
                task.date = action.payload.newDate;
                task.description = action.payload.newDescription;
            }
        },
        updateTaskOrder: (state, action: PayloadAction<{ id: string; date: string; newIndex: number }>) => {
            const tasksForDate = state.tasks.filter(task => task.date === action.payload.date);
            const taskIndex = tasksForDate.findIndex(task => task.id === action.payload.id);
            if (taskIndex > -1) {
                const [task] = tasksForDate.splice(taskIndex, 1);
                tasksForDate.splice(action.payload.newIndex, 0, task);
                tasksForDate.sort((a, b) => {
                    if (a.isHoliday && !b.isHoliday) {
                        return -1;
                    }

                    if (!a.isHoliday && b.isHoliday) {
                        return 1;
                    }

                    return 0;
                });

                state.tasks = state.tasks.filter(task => task.date !== action.payload.date).concat(tasksForDate);
            }
        },
    },
});


export const { addTask, updateTaskDate, updateTaskOrder, updateTask, addHoliday } = tasksSlice.actions;
export default tasksSlice.reducer;