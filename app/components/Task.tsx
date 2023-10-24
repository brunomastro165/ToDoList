"use client";

import React from 'react'
import { ITask } from '../../../to-do-list/src/app/types/tasks';
import { useRouter } from "next/navigation";
import { deleteTodo } from '@/api';

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
  
    const handleDeleteTask = async (id: string) => {
        await deleteTodo(id);
        router.refresh();
      };

    return (
    <tr key={task.id}>
    <td>{task.text}</td>
    <button 
     onClick={() => handleDeleteTask(task.id)} 
    className="btn btn-outline btn-success m-3">Completada</button>
    <button 
    onClick={() => handleDeleteTask(task.id)} 
    className="btn btn-outline btn-error m-3">Eliminar</button>
  </tr>
  );
};

export default Task;

