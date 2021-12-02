import React, { useEffect } from "react";
import CircleContainer from "./components/CircleContainer";
import Levels from "./components/Data";
import GameComponent from "./components/Game";
import LevelComponent from "./components/LevelComponent";
import appClasses from "./styles/App.module.css";

const App = () => {
    const [level, setLevel] = React.useState(0);
    const [pContent , setPContent]  = React.useState(appClasses.description + " d-block");
    const [isGameStarted, setIsGameStarted] = React.useState(false);
    const [gameComponent, setGameComponent] = React.useState([null]);
    const [cards, setCards]         = React.useState([]);
    const [moves, setMoves] = React.useState(0);
    
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
        setMoves(0);
    }

    const startGame = (level) => {
        setLevel(level);
        setIsGameStarted(true);
        shuffle(Levels[level].object);
    }

    const endGame = () => {
        setIsGameStarted(false);
        setPContent("d-none");
        setCards([]);
        setLevel(null);
        setMoves(0);
    }

    const handleCards = (cards) => {
        setCards(cards);
        console.log(cards);
    }

    const handleMoves = (moves) => {
        setMoves(moves);
    }

    useEffect(() => {
        if(isGameStarted){
            setGameComponent (
                <GameComponent level={Levels[level]} endGame={endGame} isGameStarted={isGameStarted} 
                                handleCards={handleCards} handleMoves={handleMoves} cards={cards} moves={moves}/>
            );
        }
        else{
            setGameComponent(<LevelComponent startGame={startGame}/>);
        }
    } , [isGameStarted]);

    return (
        <section className={appClasses.mainContainer}>
            <div className="container">
                <div className={ appClasses.dvx + " row justify-content-center align-items-center"}>
                    <div className={ !isGameStarted ? "col-md-12 m-auto position-relative" : "col-md-8 m-auto position-relative" }>
                        
                        <CircleContainer />
                        
                        <div className={appClasses.mdl}>
                            <h1 className={appClasses.title}>Memory Game</h1>
                            <p className={pContent}>Choose Level</p>

                            {/* LEVEL & GAME GRID */}
                            <div className="col-md-12">
                                {gameComponent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;