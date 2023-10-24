import exp from "constants";
import { ITask } from "./types/tasks";

const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/task`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
}

export const addTodo= async (todo): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/task`, {
    cache: 'no-store',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
    })
    const newTodo = await res.json();

}

export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/task/${id}`, {
      method: 'DELETE',
    })
  }