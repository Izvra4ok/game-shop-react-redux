import React from 'react';
import {NavLink} from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import cls from "./Navbar.module.css";


const Navbar = React.memo(() => {

    return (
        <header className={cls.header}>
            <div className={cls.wrapper}>
                <NavLink to={"/"} className={cls.header__store} >
                    Game Store
                </NavLink>

                <div className={cls.header__cart}>
                   <CartBlock/>
                </div>

            </div>
        </header>
    );
});

export default Navbar;