import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import cls from "./GamePag.module.css";
import GameTitle from "../../components/GameTitle";

const GamePage = () => {

    const currentGame = useSelector(state => state.game.currentGame);

    useEffect(() => {

    }, [currentGame.title, currentGame.genres])

    if (!currentGame.title && !currentGame.genres) {
        return <h2>Loading</h2>
    }

    return (
        <div className={cls.gamePage}>
            <GameTitle title={currentGame.title}/>
           <img style={{width:"100%"}} src={`${process.env.PUBLIC_URL}${currentGame.image}`}/>

        </div>
    )
};

export default GamePage;