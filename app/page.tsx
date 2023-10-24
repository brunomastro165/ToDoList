import Image from 'next/image'
import AddTask from './components/AddTask'
import NewTask from './components/NewTask'
import { getAllTodos } from '../api'


export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
   <>
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Tareas pendientes</h1>
        <AddTask />
      </div>
      <NewTask tasks={tasks} />
    </main>
   </>
  )
}