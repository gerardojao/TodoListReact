import React, { useState, useEffect } from 'react'

const initialForm = {
    task: "",
    comment: "",
    completed: false,
    id: null
}

const TodoForm = ({ createTask, taskEdit, updateTask, setTaskEdit }) => {

    const [form, setForm] = useState(initialForm)

    const [sucess, setSucess] = useState(null)

    useEffect(() => {
        if (taskEdit) {
            setForm(taskEdit)
        } else {
            setForm(initialForm)
        }
    }, [taskEdit])

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (!form.task || !form.comment) {
            alert("Data Empty")
            return
        }


        if (form.id === null) {
            createTask(form)
            setSucess("Task Added")
        } else {
            updateTask(form)
            setSucess("Task Edited")
        }

        setForm(initialForm)

        setTimeout(() => {
            setSucess(null)
        }, 2000);

    }

    return (
        <>

            <form className="form" onSubmit={handleSubmit} >

                <input
                    onChange={handleChange}
                    required
                    type="text"
                    className="tarea"
                    placeholder="Add task"
                    name="task"
                    value={form.task}
                />

                <textarea
                    onChange={handleChange}
                    placeholder="Add description"
                    name="comment"
                    className="description"
                    cols="30"
                    rows="3"
                    value={form.comment}

                    required></textarea>

                <div style={{ display: "flex" }}>
                    <input
                        type="submit"
                        className="button btnAddTask"
                        value={taskEdit ? "Update Task" : "Add Task"}

                    />
                    {
                        taskEdit &&
                        <input
                            type="submit"
                            className="button"
                            value="Reset"
                            onClick={ ()=>setTaskEdit(null)}

                        />

                    }

                </div>



                {sucess && (

                    <button style={{ fontSize: "1.5rem", background: "transparent", border: "1px solid #233e8b", color: "#233e8b", width: "300px", margin: "auto", borderRadius: "10px", fontWeight: "700" }}
                        className="btn-success mr-2 mt-2"

                    > {sucess}
                    </button>)
                }

            </form>

        </>
    )
}

export default TodoForm
