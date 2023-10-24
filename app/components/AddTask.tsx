"use client";

import React, { FormEventHandler } from 'react'
import Modal from './Modal'
import {useState} from "react"
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';

const AddTask = () => {

  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
  })
  
    setModalOpen(false);
    setNewTaskValue("");
    router.refresh();
  }

  return (

    <div>
    <button 
    onClick={() => setModalOpen(true)}
    className="btn btn-outline btn-secondary mb-9 w-full">
      Agregar Tarea + 
      </button>
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmitNewTodo}>
        <h3 className='font-bold text-lg'>Agregar tarea</h3>
        <div className='modal-action'>
        <input 
        value={newTaskValue}
        onChange={e => setNewTaskValue(e.target.value)}
        
        type="text" 
         placeholder="Escribe tu tarea" 
         className="input input-bordered input-secondary w-full " />
         <button type="submit" className="btn btn-outline btn-success">Agregar</button>
        </div>
      </form>
    </Modal>
    
    </div>
  )
}

export default AddTask