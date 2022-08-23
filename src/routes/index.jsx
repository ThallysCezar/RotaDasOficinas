import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import Posts from '../pages/Posts/Posts';
import Albums from '../pages/Albums/Albums';
import Todos from '../pages/Todos/Todos';



export const AppRoutes = () => {

    return(
            <Routes>
                    <Route path="/home" element={ <Home/> }/>
                    <Route exact path="/" element={ <Home/> }/>
                    <Route path="/posts" element={ <Posts/> }/>
                    <Route path="/albums" element={ <Albums/> }/>
                    <Route path="/todos" element={ <Todos/> }/>
            </Routes>
    );
};