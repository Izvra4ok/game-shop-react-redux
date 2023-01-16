import React from "react";
import cls from "./App.module.css";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className={cls.App}>
            <Navbar/>

            <div className={cls.AppContent}>
                <Routes>
                    <Route path={"/*"} element={<HomePage/>}/>>
                </Routes>
            </div>


        </div>
    );
}

export default App;
