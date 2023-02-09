import React from 'react';
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/utils";
import OrderItem from "../../components/OrderItem/OrderItem";
import {NavLink} from "react-router-dom";
import Button from "../../components/Button/Button";
import cls from "./OrderPage.module.css";

const OrderPage = React.memo(() => {

    const items = useSelector(state => state.cart.itemsInCart);

    return (
        <div>
            <NavLink to={"/"}>
                <Button type="primary" size="s">Back</Button>
            </NavLink>

            {
                items.length < 1
                    ? <h2 style={{textAlign: "center"}}>Cart is empty</h2>
                    : <div className={cls.orderPage}>
                        <div className={cls.orderPage__left}>
                            {items.map(game => <OrderItem key={Math.random()} game={game}/>)}
                        </div>
                        <div className={cls.orderPage__right}>
                            <div className={cls.orderPage__totalPrice}>
                                <span>The value of {items.length} goods in the cart: {calcTotalPrice(items)} $</span>
                                <Button type="primary" size="m">Buy</Button>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
});

export default OrderPage;