import React from 'react';
import {GAMES} from "../../DAL/games";
import GameItem from "../../components/GameItem/GameItem";
import cls from "./HomePage.module.css";


const HomePage = React.memo(() => {

    return (
        <div className={cls.home}>
            {GAMES.map(game => <GameItem key={game.id} game={game}/>)}
        </div>
    );
});

export default HomePage;