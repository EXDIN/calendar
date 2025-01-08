import { useState } from "react"
import { updateTask } from "../../../store/tasks/tasks.slice"
import ModalComponent from "../../../components/ModalComponent/ModalComponent"
import { useDispatch } from "react-redux"
import { Pencil } from "lucide-react"
import { yesterday, tomorrow } from "../../../helpers/day"
import { EditdForm, DateInput, DescInput, OpenButton, SubmBtn } from "./EditTask.styles"
import { Task } from "../../../types"


function EditTask({ task }: { task: Task }) {
    const [modalActive, setModalActive] = useState(false);
    const [data, setData] = useState<Task>({} as Task);
    const dispatch = useDispatch();

    const handleEditTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let date = yesterday(data.date);

        if (date && data.description) {
            dispatch(updateTask({
                id: data.id,
                newDate: date,
                newDescription: data.description,
            }));
        }

        setModalActive(false);
    };

    const onOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let date = tomorrow(task.date);
        setData({ ...task, date: date });

        setModalActive(true);
    };

    return (
        <>
            <OpenButton onClick={e => onOpen(e)}><Pencil /></OpenButton>
            {modalActive
                ?
                <ModalComponent active={modalActive} setActive={setModalActive}>
                    <EditdForm onSubmit={e => handleEditTask(e)}>
                        <DateInput value={data.date} type="date" onChange={(e) => setData({ ...data, date: e.currentTarget.value })}></DateInput>
                        <DescInput value={data.description} type="text" onChange={(e) => setData({ ...data, description: e.currentTarget.value })} placeholder="Description"></DescInput>
                        <SubmBtn type="submit" >Update Task</SubmBtn>
                    </EditdForm>
                </ModalComponent>
                : null}
        </>
    )
}

export default EditTask;

