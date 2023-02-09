import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import GameGenreList from "../../components/GameGenreList/GameGenreList";
import Button from "../../components/Button/Button";
import {NavLink} from "react-router-dom";
import {setItemInCart} from "../../Redux/cart/CartReducer";
import cls from "./GamePage.module.css";


const GamePage = React.memo(() => {

    const dispatch = useDispatch();
    const currentGame = useSelector(state => state.game.currentGame);

    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === currentGame.id);

    const handleClickBuyGame = useCallback((e) => {
        e.stopPropagation();
        dispatch(setItemInCart(currentGame));
    }, [currentGame]);

    useEffect(() => {
    }, [currentGame.title, currentGame.video, currentGame.image])

    if (!currentGame.video && !currentGame.title && !currentGame.image) {
        return <h2>Loading...</h2>
    }

    return (
        <div className={cls.gamePage}>

            <NavLink to={"/"}>
                <Button type="primary" size="s">Back</Button>
            </NavLink>

            <h2 className={cls.gamePage__title}>{currentGame.title}</h2>

            <div className={cls.gamePage__content}>
                <div className={cls.gamePage__left}>
                    <iframe className={cls.gamePage__iframe}
                            src={currentGame.video}
                            title={"Youtube video player"}
                            frameBorder="0"/>
                </div>

                <div className={cls.gamePage__right}>
                    <div>
                        <img src={currentGame.image} alt=""/>
                    </div>

                    <p>{currentGame.description}</p>
                    <p className={cls.secondaryText}>Популярные метки этого жанра:</p>

                    <GameGenreList genres={currentGame.genres}/>

                    <div className={cls.gamePage_buy}>

                        {isItemInCart
                            ? <NavLink to={"/order/"}>
                                <Button type="primary">Buy</Button>
                            </NavLink>
                            : <Button type="primary"
                                      onClick={handleClickBuyGame}>Add game</Button>}
                    </div>


                </div>
            </div>

        </div>
    )
});

export default GamePage;