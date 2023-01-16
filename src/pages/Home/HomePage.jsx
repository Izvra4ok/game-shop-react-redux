import React from 'react';
import cls from "./HomePage.module.css";
import {GAMES} from "../../DAL/games";
import GameItem from "../../components/GameItem/GameItem";



const HomePage = () => {

    return (
        <div className={cls.home}>
            {GAMES.map(game => <GameItem key={game.id} game={game}/>)}
        </div>
    );
};

export default HomePage;