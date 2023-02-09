import React from 'react';
import {useDispatch} from "react-redux";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {deleteItemFromCart} from "../../Redux/cart/CartReducer";
import {NavLink} from "react-router-dom";
import cls from "./OrderItem.module.css";


const OrderItem = React.memo(({game}) => {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();//event works only this component, stopPropagation- event doesn't send  to tree project
        dispatch(deleteItemFromCart(game.id))
    };

    return (
        <div className={cls.orderItem}>

            <NavLink to={`/app/${game.title}`}>
                <div className={cls.orderItem__Cover}>
                    <img src={game.image} alt=""/>
                </div>
            </NavLink>

            <NavLink to={`/app/${game.title}`}>
                <div className={cls.orderItem__Title}>
                    <span>{game.title}</span>
                </div>
            </NavLink>
            <div className={cls.orderItem__Price}>
                <span>{game.price} $</span>
                <AiOutlineCloseCircle className={cls.orderItem__Remove}
                                      size={25}
                                      onClick={handleClick}/>
            </div>

        </div>
    );
});

export default OrderItem;