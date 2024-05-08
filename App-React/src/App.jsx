import './App.css'
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Quadrado from "./components/Quadrado";
import Triangulo from "./components/Triangulo";
import Circulo from "./components/Circulo";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Trapezio from "./components/Trapezio";

const App = () => {

    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Quadrado" element={<Quadrado/>}/>    
                <Route path="/Produtos" element={<Triangulo/>}/>
                <Route path="/Circulo" element={<Circulo/>}/>
                <Route path="/Trapezio" element={<Trapezio/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;