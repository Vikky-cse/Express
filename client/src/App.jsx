import { useState } from "react";

import "./App.css";
import Expenses from "./components/expenses/Expenses";
import "./components/expense_form/ExpenseForm";
import ExpenseForm from "./components/expense_form/ExpenseForm";
import { nanoid } from "nanoid";
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from "./login/signup";
import Login from "./login/login";
import MainApp from "./components/MainApp";
import Home from "./login/Home";
import StartPage from "./login/StartPage";



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/expense" element={<MainApp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<StartPage />}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
