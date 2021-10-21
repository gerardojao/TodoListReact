import React, { useState , useEffect} from 'react'
import Nav2 from './Nav2'

import TodoForm from './TodoForm'
import TodoTask from './TodoTask'

const initialDb = [
    {
        id: 1,
        task: "Iniciar C#",
        comment: "Convertirme en FullStack",
        completed: false
    }
]
let ls = localStorage;

const TodoApp = () => {

    const [taskItems, setTaskItems] = useState(JSON.parse(ls.getItem("taskItems"))||initialDb)

    const [taskEdit, setTaskEdit] = useState(null)

    useEffect(() => {
       ls.setItem("taskItems",JSON.stringify(taskItems))
    }, [taskItems])

    const todoDelete = id => {
        setTaskItems(taskItems.filter(task => task.id !== id))
    }

    const toggleTaskCompleted = id => {
        setTaskItems(taskItems.map(task => 

            task.id === id
                ? {...task, completed: !task.completed}
                : task

        ))
    }


    const createTask = data=>{
        data.id = Date.now()
        setTaskItems([data,...taskItems])

    }
    const updateTask = taskEdit =>{

        setTaskItems( taskItems.map(
                task=>task.id===taskEdit.id
                    ? taskEdit
                    : task
                    ))
    }
  
    return (
        <div>
            <div className="general">
                <nav className="navbar">

                    <div className="navbar-link">Tasks List REACT JS</div>

                </nav>

                <div className="container">
                    
                    <TodoForm
                        createTask={createTask}
                        taskEdit ={taskEdit}
                        setTaskEdit={setTaskEdit}
                        updateTask={updateTask}
                    />
                </div>
                <div className="nav2">
                    <Nav2 />
                </div>
                <div className="taskList">
                    <TodoTask
                        taskItems={taskItems}
                        todoDelete={todoDelete}
                        toggleTaskCompleted={toggleTaskCompleted}
                        setTaskEdit={setTaskEdit} />

                </div>


            </div >
        </div>
    )
}

export default TodoApp
