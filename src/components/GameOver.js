const GameOver = (props) => {
    return (
        <div className="gameover">
            <h1>Game Over</h1>
            <h2>You made {props.moves} moves</h2>
            <h2>You took {props.timer} seconds</h2>
            <button onClick={() => props.setGame(false)}>Play Again</button>
        </div>
    );
}

export default GameOver;