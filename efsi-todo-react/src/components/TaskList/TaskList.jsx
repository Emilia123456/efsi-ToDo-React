import React from 'react';
import './TaskList.css';
import { Task } from '../Task/Task';

export function TaskList({ tasks, setTasks }) {
    return (
        <div className="task-list">
            {tasks.map((item) => (
                <Task
                    key={item.id}
                    id={item.id}
                    tasks={tasks}
                    setTasks={setTasks}
                    texto={item.texto}
                    fecha={item.date}
                    tachado={item.tachado}
                    fechaTachado={item.fechaTachado}
                />
            ))}
        </div>
    );
}
