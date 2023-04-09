import "./App.css";
import { Navbar } from "./components";
import { Home, Gallery, Menu } from "./container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Menu" Component={Gallery} />
        <Route path="/Shop" Component={Gallery} />
        <Route path="/Gallery" Component={Gallery} />
        <Route path="/About us" Component={Gallery} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
