import React from 'react';
import {calcTotalPrice} from "../../utils/utils";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import cls from "./CartMenu.module.css";


const CartMenu = React.memo(({items, handleClickOrderGame, isCartMenuVisible}) => {

    return (
        <div className={cls.cartMenu}>
            <h2>Cart</h2>

            <div>
                {items.length
                    ? items.map(game =>
                        <div key={Math.random()} className={cls.cartMenu__list}>
                            <CartItem key={Math.random()} id={game.id} title={game.title} price={game.price}/>
                        </div>)
                    : <div onClick={isCartMenuVisible(false)} className={cls.cartMenu__list_empty}>Cart is empty</div>}

            </div>
            {items.length > 0
                ? <div className={cls.cartMenu__arrange}>

                    <div className={cls.cartMenu__totalPrice}>
                        <span>Total:</span>
                        <span>{calcTotalPrice(items)} $</span>
                    </div>
                    <Button type="primary"
                            size="m"
                            onClick={handleClickOrderGame}>Order</Button>
                </div>
                : null}
        </div>
    );
});

export default CartMenu;