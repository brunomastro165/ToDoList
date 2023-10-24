import React from 'react'
import { Interface } from 'readline'
import { ITask } from '../../../to-do-list/src/app/types/tasks'
import Task from './Task'


interface ToDoProps {
  tasks: ITask[]
}

const NewTask: React.FC<ToDoProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tareas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) =>(
           <Task key={task.id} task={task}/>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NewTask