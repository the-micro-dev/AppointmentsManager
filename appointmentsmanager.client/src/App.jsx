import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from "./components/MainNavBar/MainNavBar"
import { About } from "./components/About/About"
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