import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteToDo }) {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return (
          <TodoItem {...todo} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
        );
      })}
    </ul>
  );
}
