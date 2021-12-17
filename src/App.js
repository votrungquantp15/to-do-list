import "./App.css";
import Navbar from "./component/Navbar";
import Todo from "./component/Todo";
import ThemeContext, { ThemeContexts } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContext>
        <Navbar />
        <Todo />
      </ThemeContext>
    </div>
  );
}

export default App;
