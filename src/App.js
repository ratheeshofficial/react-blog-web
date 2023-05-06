import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TinyMceEditor from "./pages/TinyMceEditor";
import TinySecond from "./pages/TinySecond";
import Todo from "./pages/Todo";
import LoginSecond from "./pages/LoginSecond";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<TinyMceEditor />} />
        <Route path="/editorsecond" element={<TinySecond />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginsecond" element={<LoginSecond />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
