import { useTodos } from "../store/TodosContext";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  id: string;
};

export function TodoItem({ id, text }: TodoItemProps) {
  const {removeTodo} = useTodos()

  function handleRemove() {
    removeTodo(id);
  }

  return (
    <li className={classes.item}>
      <span>{text} </span>
      <button onClick={handleRemove} aria-label="remove todo">
        ❌
      </button>
    </li>
  );
}
