import React from 'react';
import cls from "./GameItem.module.css";
import {GameCover} from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";

const GameItem = ({game}) => {

    return (
        <div className={cls.gameItem}>
            <GameCover key={game.id} image={game.image}/>

            <div className={cls.gameItem__details}>
                <span className={cls.gameItem__title}>{game.title}</span>
                <div className={cls.gameItem__genres}>

                    {
                        game.genres.map(genre => <GameGenre key={genre} genre={genre}/>)
                    }
                </div>

                <div className={cls.gameItem__buy}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};

export default GameItem;


