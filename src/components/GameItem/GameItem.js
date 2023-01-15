import React from 'react';
import cls from "./GameItem.module.css";

const GameItem = ({game}) => {
    return (
        <div className={cls.gameItem}>
            <div className={cls.gameItem_details}>
                <span className={cls.gameItem_title}>{game.title}</span>
                <div className={cls.gameItem_genres}>
                    {
                        game.genres.map(genre => genre)
                    }
                </div>
                <div className={cls.gameItem_buy}>Buy</div>
            </div>
        </div>
    );
};

export default GameItem;