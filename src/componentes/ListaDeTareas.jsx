import React from 'react'
import { useState } from 'react'
import '../estilos/ListaDeTareas.css'
import Formulario from './Formulario'
import Tareas from './Tareas'

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        /* con trim() vemos si la cadena de texto esta vacia o no */
        if (tarea.texto.trim()){
            /* taco estacios del principio o final que no sirven */
            tarea.texto = tarea.texto.trim();

            /* creo un arreglo con la tarea nueva al principio mas todas las anteriores */
            const tareasActualizadas = [tarea, ...tareas];
            /* ACTUALIZO A TAREAS */
            setTareas(tareasActualizadas);
        }
    }

    /* Funcion para eliminar tareas */
    const eliminarTarea = id =>{
        const tareaActualizadas = tareas.filter(tareas => tareas.id !== id);
        setTareas(tareaActualizadas);
    }

    /* Funcion para pintar tareas(tareas completadas) */
    const completarTarea = id =>{
        const tareasActualizadas =  tareas.map(tarea=> {
            if (tarea.id === id) {
                /* con el signo de interrogaciopn cambion(invierto) el bolleano   */
                tarea.completada = !tarea.completada;
            }
            return tarea; 
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className='tarea-lista-cont'>
                {
                    tareas.map((tarea) =>
                        <Tareas
                            /* para q react sepa el orden hay q pasarle un key y tiene que se unico como el id que asigne  */
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea = {completarTarea}
                            eliminarTarea = {eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ListaDeTareas