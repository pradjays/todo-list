import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from "../components/Authentication/Login";
import TodoList from "../components/Todos/TodoList";
import ProtectedRoute from "./ProtectedRoute";

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/todos' element={<ProtectedRoute />}>
                <Route path='/todos' element={<TodoList />} />
            </Route>
        </Routes>
    </BrowserRouter>
)


export default BaseRouter