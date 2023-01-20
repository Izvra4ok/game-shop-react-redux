import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {GameCover} from "../../components/GameCover/GameCover";
import GameGenreList from "../../components/GameGenreList/GameGenreList";
import GameBuy from "../../components/GameBuy/GameBuy";
import cls from "./GamePag.module.css";


const GamePage = React.memo(() => {

    const currentGame = useSelector(state => state.game.currentGame);

    useEffect(() => {
    }, [currentGame.title, currentGame.video, currentGame.image])

    if (!currentGame.video && !currentGame.title && !currentGame.image) {
        return <h2>Loading...</h2>
    }

    return (
        <div className={cls.gamePage}>
            <h2 className={cls.gamePage__title}>{currentGame.title}</h2>
            <div className={cls.gamePage__content}>
                <div className={cls.gamePage__left}>
                    <iframe width={"90%"}
                            height={"450px"}
                            src={currentGame.video}
                            title={"Youtube video player"}
                            frameBorder="0"/>
                </div>
                <div className={cls.gamePage__right}>
                    <GameCover image={currentGame.image}/>
                    <p>{currentGame.description}</p>
                    <p className={cls.secondaryText}>Популярные метки этого жанра:</p>
                    <GameGenreList genres={currentGame.genres}/>
                    <div className={cls.gamePage_buy}>
                        <GameBuy game={currentGame}/>
                    </div>
                </div>
            </div>

        </div>
    )
});

export default GamePage;