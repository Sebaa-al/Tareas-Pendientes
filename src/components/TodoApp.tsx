import { useState } from "react"

export const TodoApp = () => {
  const [newTask, setNewTask] = useState('')
  return (
      <div>
        <h1>Pending Tasks List</h1>
        <div>
          <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="New Task" 
          />
        </div>
      </div>
  )
}