import './TaskList.css';
import {Task} from '../Task/Task.jsx'

export function TaskList({tasks, setTasks}) {
   // console.log(citas)
    return (
        <>
            {tasks.map((item, id) => (
                <Task
                    key = {id}
                    texto = {item.txt} 
                    date = {item.fecha}
                    tachado = {item.tachado}
                    fechaTachado = {item.fechaTachado}
                />
            ))}
        </>


    );
}
