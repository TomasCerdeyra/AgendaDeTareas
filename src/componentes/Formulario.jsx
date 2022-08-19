import React, { useState } from 'react'
import '../estilos/Formulario.css'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [input, setInput] = useState('')

    const manejarCambio= e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        /* con preventDefault hacemos q no se vuelva a cargar la app */
        e.preventDefault();

        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }


    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input 
            className='tarea-input' 
            type="text" 
            placeholder='Escriba una Tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-button'>
                Agregar Tarea
            </button>

        </form>
    )
}

export default Formulario