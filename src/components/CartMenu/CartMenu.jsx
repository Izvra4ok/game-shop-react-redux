import React from 'react';
import {calcTotalPrice} from "../../utils/utils";
import Button from "../Button/Button";
import cls from "./CartMenu.module.css";
import CartItem from "../CartItem/CartItem";


const CartMenu = ({items, onClick}) => {

    return (
        <div className={cls.cartMenu}>
            <div>
                {items.length
                    ? items.map(game =>
                        <div key={Math.random()} className={cls.cartMenu__list}>
                            <CartItem key={Math.random()} id={game.id} title={game.title} price={game.price}/>
                        </div>)
                    : <div className={cls.cartMenu__list_empty}>Cart is empty</div>}

            </div>
            {items.length > 0
                ? <div className={cls.cartMenu__arrange}>
                    <div className={cls.cartMenu__totalPrice}>
                        <span>Total:</span>
                        <span>{calcTotalPrice(items)} $</span>
                    </div>
                    <Button type="primary"
                            size="m"
                            onClick={onClick}>Pay</Button>
                </div>
                : null}
        </div>
    );
};

export default CartMenu;