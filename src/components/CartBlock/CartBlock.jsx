import React, {useState} from 'react';
import cls from "./CartBlock.module.css";
import {BiCart} from "react-icons/bi";
import {BsFillCartCheckFill} from "react-icons/bs"
import {useSelector} from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import {calcTotalPrice} from "../../utils/utils";
import ItemsInCartCounter from "../ItemsInCartCounter/ItemsInCartCounter";


const CartBlock = () => {

    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

    return (
        <div className={cls.cartBlock}>
            {
                items.length
                    ? < div>
                        <BsFillCartCheckFill onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={35}
                                             className={cls.cartBlock_Icon}/>
                        <ItemsInCartCounter quality={items.length}/>
                    </div>
                    : <div>
                        <BiCart onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} size={35}
                                className={cls.cartBlock_Icon}/>
                    </div>
            }

            {totalPrice > 0
                ? <span className={cls.cartBlock_Price}>Total:{totalPrice} $</span>
                : null}

            {isCartMenuVisible
                ? <CartMenu items={items} onClick={() => null}/>
                : null}
        </div>
    );
};

export default CartBlock;