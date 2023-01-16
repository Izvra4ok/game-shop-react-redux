import React from 'react';
import cls from "./ItemsInCartCounter.module.css";

const ItemsInCartCounter = ({quality = 0}) => {

    return (
    <span className={cls.itemInCart}>
            {quality}
        </span>
)};
export default ItemsInCartCounter;