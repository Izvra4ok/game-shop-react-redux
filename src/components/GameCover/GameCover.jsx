import React from 'react';
import cls from "./GameCover.module.css";


export const GameCover = ({image}) => {

    return (
            <div
                className={cls.gameCover}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}${image})`}}/>
    )
}