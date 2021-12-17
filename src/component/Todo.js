import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [todos, setTodos] = React.useState([]);
  const style = {
    background: "rgb(240, 240, 240)",
    color: "black",
  };

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} deleteTodo={deleteTodo} />;
        })}
      </ul>
    </div>
  );
};

export default Todo;
