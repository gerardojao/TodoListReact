import React from 'react'
import TodoRows from './TodoRows'


const TodoTask = ({taskItems, todoDelete, toggleTaskCompleted,setTaskEdit}) => {
  
    return (
       <div>
      
               { taskItems.length===0
                ?<div className="no-task">
                    <h2>Add a New Task</h2>
                </div>
                : taskItems.map(byTask=>
                 <TodoRows 
                    byTask={byTask} 
                    key={byTask.id} 
                    todoDelete={todoDelete}
                    toggleTaskCompleted={toggleTaskCompleted}
                    setTaskEdit={setTaskEdit} />)
                }     
        </div>
    )
}

export default TodoTask
