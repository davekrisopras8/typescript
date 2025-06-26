import { useState, type ChangeEvent, type FormEvent } from "react";
import classes from "./NewTodo.module.css";
import { useTodos } from "../store/TodosContext";

export function NewTodo() {
  const { addTodo } = useTodos();
  const [enteredText, setEnteredText] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredText(event.target.value);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = enteredText.trim();
    if (!trimmed) {
      return;
    }
    addTodo(trimmed);
    setEnteredText("");
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" onChange={handleChange} value={enteredText}/>
      <button type="submit">Add Todo</button>
    </form>
  );
}
