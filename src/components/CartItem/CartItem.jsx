import React from 'react';
import cls from "./CartItem.module.css";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../Redux/cart/CartReducer";

const CartItem = ({price, title, id}) => {

    const dispatch = useDispatch();

    const handleClickDeleteGame = (e) => {
        e.stopPropagation();//event works only this component, stopPropagation- event doesn't send  to tree project
        dispatch(deleteItemFromCart(id))
    }

    return (
        <div>
            <div className={cls.cartItem}>
                <div className={cls.cartItem_title}>{title}</div>

                <div className={cls.cartItem_price}>{price} $
                    <span onClick={handleClickDeleteGame} className={cls.cartItem_remove}>—</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;