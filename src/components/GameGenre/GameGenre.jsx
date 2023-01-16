import React from 'react';
import cls from "./GameGenre.module.css";

const GameGenre = ({genre}) => {

    return (
        <span className={cls.genre}>
            {genre}
        </span>
    );
};

export default GameGenre;