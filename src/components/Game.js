import React, { useEffect } from 'react';
import gameClasses from './../styles/Game.module.css';
import Move from './Moves';
import SingleCard from './SingleCard';
import Timer from './Timer';

const GameComponent = (props) => {
    const [choiecOne, setChoiceOne] = React.useState([null]);
    const [choiceTwo, setChoiceTwo] = React.useState([null]);
    const [moves, setMoves] = React.useState(props.level.maxMoves);
    const [timer, setTimer] = React.useState(props.level.maxTime);
    const [maxTimeReached, setMaxTimeReached]   = React.useState(false);
    const [maxMovesReached, setMaxMovesReached] = React.useState(false);

    const handleClick = (card) => {
        choiecOne ? setChoiceTwo(card) : setChoiceOne(card);
        console.log(card);
    }

    const resetGameComponent = () => {
        setMoves(props.level.maxMoves);
        setTimer(props.level.maxTime);
        setMaxTimeReached(false);
        setMaxMovesReached(false);
    }

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000);
        } else {
            setMaxTimeReached(true);
        }
    }, [timer, props.level.maxTime]);

    // useEffect(() => {
    //     if (moves === 0) {
    //         setMaxMovesReached(true);
    //     } else {
    //         setMoves(moves - 1);
    //     }
    // } , [moves, props.level.maxMoves]);

    useEffect(() => {
        if(maxMovesReached || maxTimeReached) {
            props.handleGameOver(true, moves, timer);
            resetGameComponent();
        }
    } , [maxTimeReached, maxMovesReached]);

    useEffect(() => {
        if (Boolean(choiecOne) && Boolean(choiceTwo)) {
            setTimeout(() => {
                if (choiecOne.src === choiceTwo.src) {
                    choiecOne.isFlipped = true;
                    choiecOne.isMatched = true;
                    choiceTwo.isFlipped = true;
                    choiceTwo.isMatched = true;
                    props.handleCards(choiecOne, choiceTwo);
                    reset();
                } else {
                    choiecOne.isFlipped = false;
                    choiecOne.isMatched = false;
                    choiceTwo.isFlipped = false;
                    choiceTwo.isMatched = false;
                    props.handleCards(choiecOne, choiceTwo);
                    reset();
                }
            }, 2000);
        }
    } , [choiecOne, choiceTwo]);

    const reset = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setMoves((prevmove) => prevmove - 1);
        console.log( moves , "Executed");
    }

    return(
        <div className="div">
            <div className="col-md-9 m-auto">
                <div className={ gameClasses.displayGame + " d-flex align-items-center justify-content-between"}>
                    <Move move={moves}/>
                        
                    <Timer time={timer} maxTimeReached={maxTimeReached}/>
                </div>
            </div>
            <div className="m-auto d-flex justify-content-center align-items-center">
                <div className={gameClasses.gameContainer} 
                    style={props.level.grid === 5 ? {gridTemplateColumns: "110px 110px 110px 110px 110px"} : 
                            props.level.grid === 6 ? {gridTemplateColumns: "110px 110px 110px 110px 110px 110px"} : 
                                                    {gridTemplateColumns: "110px 110px 110px 110px"}}>
                    {
                        props.cards.map((card) => <SingleCard key={card.id} card={card} 
                                isFlipped={card === choiceTwo || card === choiecOne || card.isFlipped} 
                                isMatched={card === choiceTwo || card === choiecOne || card.isMatched}
                                handleClick={handleClick}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default GameComponent;