import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/nav";
import Routing from "./components/routing";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
