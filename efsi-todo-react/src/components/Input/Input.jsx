import "./Input.css"
import { useState } from "react";
//import { getElementError } from "@testing-library/react";

export function Input({tasks, setTasks}){
    const [Tid,setTId] = useState(0);

    function addTask(id){
        let content = document.getElementById(id)
        if(content.value === '') { 
            alert("Error en el ingreso de datos")   
        }else{
            setTId(Tid+1);
            let newTask = crearNuevoObjeto(Tid, content.value)
            let newTasks = [...tasks, newTask];
            setTasks(newTasks);
        }
    }

    function crearNuevoObjeto(Tid, txt){
        let obj = {
            id : Tid,
            texto : txt, 
            date : new Date().toLocaleDateString(),
            tachado : false,
            fechaTachado: ''
        }
        return obj;
    }

    return (
        
        <div class="filas">
            <input type="text" id="input-box" placeholder="Agregá una nueva tarea"> </input> {/*tarea*/}
            <button onclick="addTask(`input-box`)">+</button>
        </div>

    );
}

