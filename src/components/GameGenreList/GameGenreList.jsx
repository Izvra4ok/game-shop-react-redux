import React from 'react';
import GameGenre from "../GameGenre/GameGenre";
import cls from "./GameGenreList.module.css";

const GameGenreList = ({genres}) => {

    return (
        <div className={cls.genres}>
            {
                genres.map(genre => <GameGenre key={Math.random()} genre={genre}/>)
            }
        </div>
    );
};

export default GameGenreList;