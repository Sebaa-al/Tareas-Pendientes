import { Task } from "./Task"

type TasksList = {
    tasksList: string[]
    deleteTask: (index: number) => void
}

export const TasksList = ({ tasksList, deleteTask }:TasksList) => {
  return (
    <div className="taskList">
      {tasksList.map((task,index) => (
        <Task key= {index} task={task} deleteTask={()=> deleteTask(index)}></Task> 
      )
    )}
    </div>
  )
}