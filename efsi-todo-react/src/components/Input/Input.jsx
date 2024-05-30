import React, { useState } from "react";

export default function Input({ tasks, setTasks }) {
    const [inputValue, setInputValue] = useState("");

    function addTask() {
        if (inputValue.trim() === "") {
            alert("Error en el ingreso de datos");
            return;
        }
        
        const newTask = {
            id: tasks.length,
            texto: inputValue,
            date: new Date().toLocaleDateString(),
            tachado: false,
            fechaTachado: ""
        };

        setTasks([...tasks, newTask]);
        setInputValue("");
    }

    return (
        <div className="filas">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Agregá una nueva tarea"
            />
            <button onClick={addTask}>+</button>
        </div>
    );
}


