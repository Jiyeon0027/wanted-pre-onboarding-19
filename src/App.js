import "./index.css";
import Mainpage from "./pages/mainpage";
import TodoListContext from "./store/contextApi";

function App() {
  return (
    <TodoListContext>
      <Mainpage />
    </TodoListContext>
  );
}

export default App;
