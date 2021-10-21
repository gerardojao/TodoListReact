import React from 'react'

const TodoRows = ({ byTask , todoDelete, toggleTaskCompleted,setTaskEdit}) => {
let {task, comment, id, completed} = byTask
    return (
        <div className="card mt-2 ">
            <div className="card-body d-flex">
                <h4 className={`card-title  ${completed ? `line-through`:`nothing`}`}>
                    {task}

                </h4>
          
                <h5 className={`card-text  ${completed ? `line-through`:`nothing`}`}>
                    {comment}
                </h5>
               
                <div className="d-flex justify-content-end ">
                    <button
                        className="btn btn-sm btn-success mr-2"
                        onClick={()=>toggleTaskCompleted(id)}
                    > Finish
                    </button>
                    <button 
                        className="btn btn-sm btn-outline-primary mr-2"
                        onClick = {()=>setTaskEdit(byTask)}
                    > Editar
                    </button>
                    <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick = {()=>todoDelete(id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoRows
