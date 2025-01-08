import { useState } from "react"
import ModalComponent from "../../../components/ModalComponent/ModalComponent"
import { useDispatch } from "react-redux"
import { addTask } from '../../../store/tasks/tasks.slice';
import { yesterday } from "../../../helpers/day"
import { AddForm, DateInput, DescInput, OpenButton, SubmBtn } from "./AddTask.styles"
import { Task } from "../../../types";



function AddTask() {
    const [modalActive, setModalActive] = useState(false);
    const [data, setData] = useState<Task>({} as Task);
    const dispatch = useDispatch();

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const date = yesterday(data.date);

        if (data.date && data.description) {
            dispatch(addTask({
                id: Date.now().toString(),
                date: date,
                description: data.description,
            }));
        }

        setModalActive(false);
    };

    return (
        <>
            <OpenButton onClick={() => setModalActive(true)}>Add new Task</OpenButton>
            {modalActive
                ?
                <ModalComponent active={modalActive} setActive={setModalActive}>
                    <AddForm onSubmit={e => handleAddTask(e)}>
                        <DateInput type="date" onChange={(e) => setData({ ...data, date: e.currentTarget.value })}></DateInput>
                        <DescInput type="text" onChange={(e) => setData({ ...data, description: e.currentTarget.value })} placeholder="Description"></DescInput>
                        <SubmBtn type="submit">Create Task</SubmBtn>
                    </AddForm>
                </ModalComponent>
                : null}
        </>
    )
}

export default AddTask;
