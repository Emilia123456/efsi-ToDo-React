import React from "react";
import "./Task.css";

export function Task({ id, tasks, setTasks, txt, fecha, tachado, fechatachado}) {

  const tacharTask = (id) => {
    console.log("Tachar tarea:", tasks.id);
    let tareaATachar = tasks.filter(tasks => tasks.id === id);
    tareaATachar = !tareaATachar.tachado
    document.getElementById(tareaATachar.id).style.textDecoration = 'line-through';
    tareaATachar.fechaTachado = new Date().toLocaleDateString();
  }
/* 
  const eliminarTask = (id) => {
    console.log("Eliminar tarea:", tasks.id);
    const nuevoArrayTasks = tasks.filter(tasks => tasks.id !== id);
    setTasks(nuevoArrayTasks);
    console.log("Nuevo Array:" + nuevoArrayTasks);
  } */

  return (<div className="cita" key={id}>
    <p>Tarea: <span>{txt}</span></p>
    <button onClick={()=>tacharTask(id)} txt="Eliminar x" clase="button elimnar u-full-width"/>
  </div>);

}