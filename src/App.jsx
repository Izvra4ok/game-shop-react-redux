import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import GamePage from "./pages/Game/GamePage";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "./Redux/game/gameReducer";
import {setItemInCart} from "./Redux/cart/CartReducer";
import OrderPage from "./pages/Order/OrderPage";
import cls from "./App.module.css";


const App = React.memo(() => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("game")) {
            dispatch(setCurrentGame(JSON.parse(localStorage.getItem("game" || ""))));
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            dispatch(setItemInCart(JSON.parse(localStorage.getItem("cart" || ""))));
        }
    }, [])


    return (
        <div className={cls.App}>
            <Navbar/>

            <div className={cls.AppContent}>
                <Routes>
                    <Route path={"/*"} element={<HomePage/>}/>>
                    <Route path={"/app/*"} element={<GamePage/>}/>
                    <Route path={"/app/:title/*"} element={<GamePage/>}/>
                    <Route path={"/order/*"} element={<OrderPage/>}/>
                    <Route path="*" element={<h2>"404 Not Found"</h2>}/>

                </Routes>
            </div>


        </div>
    );
});

export default App;
