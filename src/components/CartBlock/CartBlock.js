import React from 'react';
import cls from "./CartBlock.module.css";
import {BiCart} from "react-icons/bi";

const CartBlock = () => {
    return (
        <div className={cls.cartBlock}>
            <BiCart size={35} className={cls.cartBlock_Icon}/>
            <span className={cls.cartBlock_Price}>23232 $</span>
        </div>
    );
};

export default CartBlock;