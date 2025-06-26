import { createContext, useState, useContext, type ReactNode } from "react";
import type { Todo } from "../models/todo";

interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

interface TodosProviderProps {
  children: ReactNode;
}

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    setTodos((prev) => [...prev, { id: new Date().toISOString(), text }]);
  }

  function removeTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const todosContextValue: TodosContextType = {
    todos: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={todosContextValue}>
      {children}
    </TodosContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodos() {
  return useContext(TodosContext);
}
