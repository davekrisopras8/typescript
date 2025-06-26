import { Todos } from "./components/Todos";
import { NewTodo } from "./components/NewTodo";
import { TodosProvider } from "./store/TodosContext";

function App() {
  return (
    <TodosProvider>
      <main>
        <NewTodo />
        <Todos />
      </main>
    </TodosProvider>
  );
}

export default App;
