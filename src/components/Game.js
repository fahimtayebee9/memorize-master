import React, { useEffect } from 'react';
import gameClasses from './../styles/Game.module.css';
import Move from './Moves';
import SingleCard from './SingleCard';
import Timer from './Timer';

const GameComponent = (props) => {
    const [choiecOne, setChoiceOne] = React.useState([null]);
    const [choiceTwo, setChoiceTwo] = React.useState([null]);

    const handleClick = (card) => {
        choiecOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if (choiecOne && choiceTwo) {
            setTimeout(() => {
                if (choiecOne.src === choiceTwo.src) {
                    props.handleCards(
                        props.cards.map((card) => {
                            if (card.src === choiceTwo.src || card.src === choiecOne.src) {
                                return { ...card, isMatched: true, isFlipped: true };
                            }
                            return card;
                        })
                    )
                } else {
                    props.handleCards(
                        props.cards.map((card) => {
                            if (card.id === choiecOne.id || card.id === choiceTwo.id) {
                                return { ...card, isFlipped: false, isMatched: false };
                            }
                            return card;
                        })
                    );
                }
                reset();
            }, 2000);
        }
    } , [choiecOne, choiceTwo]);

    const reset = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        props.handleMoves(props.moves + 1);
    }

    return(
        <div className="div">
            <div className="col-md-6 m-auto">
                <div className={ gameClasses.displayGame + " d-flex align-items-center justify-content-between"}>
                    
                    <Move move={props.moves}/>
                    
                    <Timer time={props.level.maxTime}/>
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