import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import UserDataForm from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Counter/>
      <RichTextEditor/>
      <UserDataForm/>
    </div>
  );
}

export default App;
