import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter, Route, routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      {/* <Registration /> */}
      {/* <Login /> */}
      <routes>
        <Route path="/" element={<Login />} />
        <Route path="/" index element={<Registration />} />
      </routes>
    </div>
  );
}

export default App;
