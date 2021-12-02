import gameClasses from './../styles/Game.module.css';

const Move = (props) => {
    return(
        <div className={gameClasses.moves}>
            <span className={gameClasses.moveCount + " mr-2"}>{props.move}</span>
            <span className={gameClasses.moveText + " mr-2"}>Moves</span>
        </div>
    );
}

export default Move;