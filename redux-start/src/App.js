import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {JSON.stringify(state)} */}
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
