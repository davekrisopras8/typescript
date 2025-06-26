import type { Todo } from "../models/todo";

export function createTodo(text: string): Todo {
  return {
    id: new Date().toISOString(),
    text
  }
}
