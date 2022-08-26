import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home';
import Desafio1 from '../pages/Desafio1/Desafio1';
import Desafio2 from '../pages/Desafio2/Desafio2';
import Desafio3 from '../pages/Desafio3/Desafio3';



export const AppRoutes = () => {

    return(
            <Routes>
                    <Route path="/home" element={ <Home/> }/>
                    <Route exact path="/" element={ <Home/> }/>
                    <Route path="/des1" element={ <Desafio2/> }/>
                    <Route path="/des2" element={ <Desafio3/> }/>
                    <Route path="/des3" element={ <Desafio1/> }/>
            </Routes>
    );
};