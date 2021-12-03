import gameClasses from './../styles/Game.module.css';

const Move = (props) => {
    return(
        <div className={gameClasses.moves}>
            <p className="d-inline m-0 mr-2">Remaining Move:</p>
            <span className={gameClasses.moveCount + " mr-2"}>{props.move}</span>
            <span className={gameClasses.moveText + " mr-2"}>Moves</span>
        </div>
    );
}

export default Move;