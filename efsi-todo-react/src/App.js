import './App.css';
import { Input } from './../components/Input/Input';
import {TaskList} from './../components/TaskList/TaskList';
import React, {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  return (<>
    <div class="container">
        <div class="todo-app">
            <h2>To Do list</h2>
            <Input tasks={tasks} setTasks={setTasks} />
            <ul id="lista-contenedor">
            
            </ul>
            <button class="botonEliminar" onclick="borrarTodo()">Eliminar todo</button>
        </div>
    </div>

  </>
  );

}



export default App;