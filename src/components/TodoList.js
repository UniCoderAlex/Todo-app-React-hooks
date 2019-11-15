import React, {useState} from 'react'
import Item from './Item'
import './css/todolist.css'

const TodoList = () => {

    const [tasks, setTasks] = useState(
        [{
            title: "Around The World",
            completed: true
        },
        {
            title: "Do your workout",
            completed: true
        },
        {
            title: "Hangout with friends",
            completed: false
        }]
    )

    const [value, setValue] = useState("")

    const addTask = (title) => {
        const newTasks = [...tasks, {title, completed:false}]
        setTasks(newTasks)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) return;
        addTask(value)
        setValue("")
    }

    const removeTask = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    const completeTask = (index) => {
        const newTasks = [...tasks]

        if (newTasks[index].completed) {
            newTasks[index].completed = false
        } else {
            newTasks[index].completed = true
        }
        setTasks(newTasks)
    }

    return (
        <div>
            <center>
                <div className="input-form">
                    <form onSubmit={handleSubmit}>
                        <input className="main-input"
                                type="text"
                                value={value}
                                placeholder="Your Task"
                                onChange={e => setValue(e.target.value)}
                        ></input>
                        <button  className="btn-submit" type="submit">Submit</button>
                    </form>    
                </div>
            </center>
            
            <div className="container">

                { tasks.map( (task, index) => {

                    const completedText = task.completed ? 'Decomplete' : 'Complete'

                    return (
                        <div className="items">
                            <Item
                                task={task}
                                index={index}
                                key={index}
                            />
                            <button className="btn-complete" onClick={ () => completeTask(index) } >{completedText}</button>
                            <button className="btn-delete" onClick={ () => removeTask(index) } >Delete</button>
                        </div>
                        )
                } ) }

            </div>
        </div>

    )

}

export default TodoList