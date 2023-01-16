import React from 'react';
import cls from "./GameBuy.module.css";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../Redux/cart/CartReducer";

const GameBuy = ({game}) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id);

    const handleClickBuyGame = (e) => {
        e.stopPropagation(); //event works only this component, stopPropagation- event doesn't send  to tree project
        dispatch(setItemInCart(game));
    };

    const handleClickDeleteGame = (e) => {
        e.stopPropagation();//event works only this component, stopPropagation- event doesn't send  to tree project
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className={cls.gameBuy}>
            <span className={cls.gameBuy__price}>{game.price} $</span>
            {isItemInCart
                ? <Button type="secondary"
                          onClick={handleClickDeleteGame}>Remove</Button>
                : <Button type="primary"
                          onClick={handleClickBuyGame}>Buy game</Button>}
        </div>
    );
};

export default GameBuy;