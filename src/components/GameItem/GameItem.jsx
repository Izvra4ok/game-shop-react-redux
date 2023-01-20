import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {setCurrentGame, setIsLoading} from "../../Redux/game/gameReducer";
import {useNavigate} from "react-router-dom";
import {GameCover} from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenreList from "../GameGenreList/GameGenreList";
import cls from "./GameItem.module.css";


const GameItem = React.memo(({game}) => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const handleOpenItemGame = useCallback(() => {
        dispatch(setIsLoading(true));
        dispatch(setCurrentGame(game));
        history("/app/" + game.title);
    }, [history]);

    return (
        <div className={cls.gameItem} onClick={handleOpenItemGame}>

            <GameCover key={game.id} image={game.image}/>

            <div className={cls.gameItem__details}>
                <span className={cls.gameItem__title}>{game.title}</span>

                <div>
                    <GameGenreList genres={game.genres}/>
                </div>

                <div className={cls.gameItem__buy}>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
});

export default GameItem;


