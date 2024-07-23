import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from "./components/nav-bar/NavBar"
import { About } from "./components/about/about"
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/about" element={ <About/> } />
            </Routes>
        </div>
    );
}

export default App;