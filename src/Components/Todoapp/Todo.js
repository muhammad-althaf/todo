import React, { useState } from 'react'
import './Todo.css'
import AddTask from './addTask'
import ListTask from './listTask'

const Todo = () => {
  const [tasks, setTasks] = useState([
   
  ])

  const addTask =(tittle) => {
    const newTask = [...tasks,{tittle}]
    setTasks(newTask)
  }

  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
  }

  return (
    <>
        <div className="todo-container">
            <div className="header">Todo App</div>
            <div className="add-task">
              <AddTask addTask={addTask}/>
              </div>
            <div className="tasks">
              {tasks.map((task, index) => (
                <ListTask task={task} removeTask={removeTask} index={index}/>
              ))}
              </div>
        </div>
    </>
  )
}

export default Todo