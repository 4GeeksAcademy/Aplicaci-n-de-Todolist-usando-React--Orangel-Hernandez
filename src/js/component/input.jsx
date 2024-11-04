import React from "react";
import { useState } from "react";
export const Input = () => {

const [toDo, setToDo] = useState([])
const [nuevoToDo, setNuevoToDo] = useState("");

const handleChange = e =>
    setNuevoToDo (e.target.value);

const handleSubmit = e => {
    e.preventDefault();
    setToDo([...toDo, {label: nuevoToDo, done: false}]);
    setNuevoToDo("");
};

const handleClick = (index) => {setToDo(toDo.filter((_, i) => i !== index));
};

return (
    <>
        <h1 className="text-secondary">TODOLIST</h1>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                <input 
                className="col-12 d-flex justify-content-center align-items-center p-3 text-secondary" 
                type="text"
                value={nuevoToDo}
                onChange={handleChange}
                placeholder="¿Qué necesitas hacer?"
                />
                </div>
            </div>    
                <input className="botonEnviar"
                    type="submit" 
                    value="agregar"
                />
        </form>
        
            <ul>
                
                {toDo.length>0 && toDo.map((tarea, i) => (
                    <li className="border border-Secondary text-secondary " key={i}>{tarea.label} <span class="borrador fa-solid fa-eraser" onClick={() => handleClick(i)}/>
                    </li>
                
                ))}
            </ul>
        <div className="border border-Secondary d-flex justify-content-between">
            <p className="totalTarea text-secondary"><span className="numeroLength">{toDo.length}</span>Tareas Pendientes</p></div>
    </>
);
};