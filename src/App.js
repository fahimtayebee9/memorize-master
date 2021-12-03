import React, { useEffect } from "react";
import CircleContainer from "./components/CircleContainer";
import Levels from "./components/Data";
import GameComponent from "./components/Game";
import GameOver from "./components/GameOver";
import LevelComponent from "./components/LevelComponent";
import appClasses from "./styles/App.module.css";

const App = () => {
    const [level, setLevel] = React.useState(0);
    const [pContent , setPContent]  = React.useState(appClasses.description + " d-block");
    const [isGameStarted, setIsGameStarted] = React.useState(false);
    const [renderComponent, setRenderComponent] = React.useState([null]);
    const [cards, setCards]         = React.useState([]);
    const [isGameOver, setGameOver] = React.useState(false);
    const [scoreMoves, setScoreMoves] = React.useState(0);
    const [scoreTime, setScoreTime]   = React.useState(0);
    const [column, setColumn]         = React.useState(0);

    useEffect(() => {
        if (isGameStarted) {
            setPContent('d-none');
        }
    }, [isGameStarted]);

    const shuffle = (sources) => {
        const shuffled = [...sources, ...sources].sort(() => 0.5 - Math.random()).map((card) => {
            return { ...card, isFlipped: false, isMatched: false, id: Math.random() };
        });
        setCards(shuffled);
    }

    const startGame = (level) => {
        setLevel(level);
        setIsGameStarted(true);
        shuffle(Levels[level].object);
    }

    const endGame = () => {
        setIsGameStarted(false);
        setPContent(appClasses.description + " d-block");
        setCards([]);
        setLevel(null);
        setGameOver(false);
    }

    const handleGameOver = (value, moves, time) => {
        setScoreTime(time === 0 ? Levels[level].maxTime : Levels[level].maxTime - time);
        setScoreMoves(moves === 0 ? Levels[level].maxMoves : Levels[level].maxMoves - moves);
        setGameOver(value);
    }

    const handleCards = (cardOne, cardTwo) => {
        setCards(
            cards.map((card) => {
                if (card.src === cardOne.src || card.src === cardTwo.src) {
                    return { ...card, isMatched: cardOne.isMatched, isFlipped: cardOne.isFlipped };
                }
                return card;
            })
        );
        checkGameOver();
    }

    const checkGameOver = () => {
        let cardsMatched = cards.filter((card) => card.isMatched);
        if (cardsMatched.length === cards.length) {
            setGameOver(true);
        }
    }

    // useEffect(() => {
    //     checkGameOver();
    // } , [cards]);

    useEffect(() => {
        if(isGameOver){
            setColumn(10);
            setRenderComponent(<GameOver moves={scoreMoves} timer={scoreTime} endGame={endGame}/>);
        }
        else if(isGameStarted){
            setColumn(10);
            setRenderComponent (
                <GameComponent level={Levels[level]} isGameStarted={isGameStarted} 
                                setCards={setCards} handleCards={handleCards} cards={cards}
                                handleGameOver={handleGameOver}/>
            );
        }
        else if(!isGameStarted || level === null || level === undefined || !isGameOver){
            setColumn(12);
            setRenderComponent(<LevelComponent startGame={startGame}/>);
        }
    } , [isGameStarted, isGameOver]);

    return (
        <section className={appClasses.mainContainer}>
            <div className="container">
                <div className={ appClasses.dvx + " row justify-content-center align-items-center"}>
                    <div className={`col-md-${column} m-auto position-relative`}>
                        
                        <CircleContainer />
                        
                        <div className={appClasses.mdl}>
                            <h1 className={appClasses.title}>Memorize Master</h1>
                            <p className={pContent}>Choose Level</p>

                            {/* LEVEL & GAME GRID */}
                            <div className="col-md-12">
                                {renderComponent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;