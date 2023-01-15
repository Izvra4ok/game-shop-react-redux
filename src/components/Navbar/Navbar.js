import React from 'react';
import cls from "./Navbar.module.css";
import {Link, NavLink} from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";

const Navbar = () => {
    return (
        <header className={cls.header}>
            <div className={cls.wrapper}>
                <Link to={"#"} className={cls.header__store} >
                    Game Store
                </Link>

                <div className={cls.header__cart}>
                   <CartBlock/>
                </div>

            </div>
        </header>
    );
};

export default Navbar;