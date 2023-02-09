import React, {useCallback, useState} from 'react';
import {BiCart} from "react-icons/bi";
import {BsFillCartCheckFill} from "react-icons/bs"
import {useSelector} from "react-redux";
import CartMenu from "../CartMenu/CartMenu";
import {calcTotalPrice} from "../../utils/utils";
import ItemsInCartCounter from "../ItemsInCartCounter/ItemsInCartCounter";
import {useNavigate} from "react-router-dom";
import cls from "./CartBlock.module.css";


const CartBlock = React.memo(() => {

    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const history = useNavigate();

    const handleClickOrderGame = useCallback(() => {
        setIsCartMenuVisible(false)
        history("/order/")
    }, [history]);

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

            {
                totalPrice > 0
                    ? <span className={cls.cartBlock_Price}>Total:{totalPrice} $</span>
                    : null
            }

            {
                isCartMenuVisible
                    ? <CartMenu isCartMenuVisible={()=> setIsCartMenuVisible(false)} items={items} handleClickOrderGame={handleClickOrderGame}/>
                    : null
            }
        </div>
    );
});

export default CartBlock;