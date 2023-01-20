import React from 'react';
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/utils";
import OrderItem from "../../components/OrderItem/OrderItem";
import cls from "./OrderPage.module.css";


const OrderPage = React.memo(() => {

    const items = useSelector(state => state.cart.itemsInCart);

    if (items.length < 1) {
        return <h2>Cart is empty</h2>
    }

    return (
        <div className={cls.orderPage}>
            <div className="orderPage__left">
                {items.map(game => <OrderItem key={Math.random()} game={game}/>)}
            </div>
            <div className="orderPage__right">
                <div className="orderPage__totalPrice">
                    <span>The value of {items.length} goods in the cart: {calcTotalPrice(items)} $</span>
                </div>
            </div>
        </div>
    );
});

export default OrderPage;