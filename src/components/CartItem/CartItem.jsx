import React from 'react';
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../Redux/cart/CartReducer";
import {AiOutlineCloseCircle} from "react-icons/ai";
import cls from "./CartItem.module.css";


const CartItem = React.memo(({price, title, id}) => {

    const dispatch = useDispatch();

    const handleClickDeleteGame = (e) => {
        e.stopPropagation();//event works only this component, stopPropagation- event doesn't send  to tree project
        dispatch(deleteItemFromCart(id))
    };

    return (
        <div>
            <div className={cls.cartItem}>
                    <div className={cls.cartItem_title}>{title}</div>

                <div className={cls.cartItem_price}>{price} $
                    <AiOutlineCloseCircle size={20} className={cls.cartItem_remove} onClick={handleClickDeleteGame}/>
                </div>
            </div>
        </div>
    );
});

export default CartItem;