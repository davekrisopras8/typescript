import type { Todo } from "../models/todo";
import { useTodos } from "../store/TodosContext";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";

export function Todos() {
  const {todos} = useTodos()

  return (
    <ul className={classes.todos}>
      {todos.map((item: Todo) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
        />
      ))}
    </ul>
  );
}
