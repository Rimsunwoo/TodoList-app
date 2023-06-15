import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";
import TodoSection from "./components/TodoSection";
function App() {
  return (
    <div className="layout-container">
      <Header></Header>
      <TodoForm></TodoForm>
      <TodoSection></TodoSection>
    </div>
  );
}

export default App;
