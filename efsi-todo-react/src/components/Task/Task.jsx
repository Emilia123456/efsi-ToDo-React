import React from "react";

export function Task({ id, tasks, setTasks, texto, fecha, tachado, fechaTachado }) {
    const tacharTask = (id) => {
        const tareaATachar = tasks.map(task =>
            task.id === id ? { ...task, tachado: !task.tachado, fechaTachado: new Date().toLocaleDateString() } : task
        );
        setTasks(tareaATachar);
    };

    return (
        <div className="cita" key={id}>
            <p>Tarea: <span style={{ textDecoration: tachado ? 'line-through' : 'none' }}>{texto}</span></p>
            <button onClick={() => tacharTask(id)}>Tachar</button>
        </div>
    );
}
