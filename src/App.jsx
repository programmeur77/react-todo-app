import { useEffect, useState } from 'react';
import './style.css';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true };
        }

        return todo;
      });
    });
  }

  function deleteToDo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
    </>
  );
}
