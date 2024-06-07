import React, {useState} from 'react';
import './App.css';
import Input from './components/Input/Input';
import { TaskList } from './components/TaskList/TaskList';
import { Task } from './components/Task/Task';

const borrarTodo = (tasks, setTasks) => {
  let a = []
  tasks=setTasks(a);
};

const calcularMasRapido = (tasks, id) => {
  let tareaMasRapida = tasks[0];
  if (tasks.length === 0) return null; 
  for (let i = 1; i < tasks.length; i++) {
    if (tasks[i].fechaTachado < tareaMasRapida.fechaTachado) {
      tareaMasRapida = tasks[i];
    }
  }
  console.log(tareaMasRapida.texto)
  document.querySelector(id).innerHTML += `<Task texto={tareaMasRapida.texto}`/>
  );
};


function App() {
  const [tasks, setTasks] = useState([]);

  return (<>
    <div class="container">
        <div class="todo-app">
            <h2>To Do list</h2>
            <Input tasks={tasks} setTasks={setTasks} />
            <ul id="lista-contenedor">
             <TaskList  tasks={tasks} setTasks={setTasks}/>
            </ul>
            <button class="botonEliminar" onClick={() => borrarTodo(tasks, setTasks)}>Eliminar todo</button>
            <button class="botonEliminar" onClick={() => calcularMasRapido(tasks, "masRap")}>Mas rapido en realizarse</button>
            <p id="masRap"> </>
            
        </div>
    </div>

  </>
  );

}

export default App;
