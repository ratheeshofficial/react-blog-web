import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TinyMceEditor from "./pages/TinyMceEditor";
import TinySecond from "./pages/TinySecond";
import Todo from "./pages/Todo";
import LoginSecond from "./pages/LoginSecond";
import ContactForm from "./pages/ContactForm";
import CreateAdmin from "./pages/CreateAdmin";
// import User from "../../api/models/User";
import React from "react";

function App() {
  const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
  const isAdmin =
    Object.keys(loginDetails)?.length && loginDetails.role === "admin";

  const protectedRoutes = () => {
    if (isAdmin) {
      return (
        <Route
          path="/"
          element={
            <React.Fragment>
              <Outlet />
            </React.Fragment>
          }
        >
          <Route path={"create/admin"} element={<CreateAdmin />} />
          <Route path={"users"} element={<Text children={"hello world"} />} />
        </Route>
      );
    }
  };

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
        {protectedRoutes()}
        <Route path={"*"} element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
