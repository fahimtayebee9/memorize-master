import gameOverClasses from './../styles/GameOver.module.css';

const GameOver = (props) => {
    const playAgain = () => {
        props.endGame();
    }
    return (
        <div className={gameOverClasses.gameOver}>
            <h1>Game Over</h1>
            <h2>You made {props.moves} moves</h2>
            <h2>You took {props.timer} seconds</h2>
            <button className={gameOverClasses.btnCustom + ' btn'} onClick={playAgain}>Play Again</button>
        </div>
    );
}

export default GameOver;