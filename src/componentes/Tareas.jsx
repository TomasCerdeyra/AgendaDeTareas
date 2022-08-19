import React from 'react'
import '../estilos/Tareas.css'
import { MdOutlineDeleteForever } from "react-icons/md";

const Tareas = ({ texto, completada, id, completarTarea, eliminarTarea }) => {
    return (
        <div className={completada ? 'cont-Tareas completada' : 'cont-Tareas'} >
            <div className='cont-texto' onClick={()=> completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea-cont-icon' onClick={()=> eliminarTarea(id)}>
                <MdOutlineDeleteForever className='tarea-icon'/>
            </div>
        </div>
    )
}

export default Tareas