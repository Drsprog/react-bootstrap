import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initialstate = [{
    id: new Date().getTime(),
    tarea: 'explicar Reducers',
    finalizada: false
}]

const tareaReducer = (state = initialstate, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar tareas':
            return [...state, action.payload]
        case '[TAREAS] Finalizar tarea':
            return state.map(tarea=>{
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                } return tarea
            })
            //return [...state, action.payload]
        case '[TAREAS] Eliminar tareas':
            return state.filter(tarea=> tarea.id !== action.payload)
            //return [...state, action.payload]
        case '[TAREAS] Borrar tareas':
            return []
        default:
            return state;
    }
}




export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, initialstate)

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (event) => {
        event.preventDefault()
        if(formState.tarea=="") return
        const tarea={
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action={
            type: '[TAREAS] Agregar tareas',
            payload:tarea
        }
        dispatch(action)
    }

    const finalizarTarea =({id})=>{

        const action= {
            type: '[TAREAS] Finalizar tarea',
            payload:id
        }
        dispatch(action)
    }

    const eliminarTarea = ({id})=>{
        const action= {
            type: '[TAREAS] Eliminar tareas',
            payload:id
        }
        dispatch(action)
    }

    const reset= ()=>{
        const action={
            type: '[TAREAS] Borrar tareas',
            payload: ''
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingrese tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className="list-group">
                {tareasState.map(item=> {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={item.id}>
                            <span>{item.tarea}</span>
                            <div>
                            <input 
                            type="checkbox" 
                            value={item.finalizada}
                            onChange={() => finalizarTarea(item)}
                            /> 
                            <button 
                            className="btn btn-danger"
                            onClick={()=> eliminarTarea(item)}
                            >
                                Borrar
                            </button> 
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
