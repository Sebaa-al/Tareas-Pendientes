import { useState } from "react"
import { TasksList } from "./TasksList"

export const TodoApp = () => {
  const [newTask, setNewTasks] = useState<string>('')
  const [tasksList, setTasksList] = useState<string[]>([])
  
  
  const handleAddTask = () => {
    if(newTask.trim() === '')return 
    setTasksList(lastTasks => [...lastTasks, newTask])
      setNewTasks('')
  }


  const handleDeleteTask = (index: number)=>{
    setTasksList(tasks => tasks.filter((_,i) => i !== index))
  }


  return (
      <div>
        <h1>Pending Tasks List</h1>
        <div className="flex">
          <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTasks(e.target.value)} 
          placeholder="New Task" 
          />
          <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <TasksList tasksList={tasksList} deleteTask={handleDeleteTask}></TasksList>
      </div>
  )
}