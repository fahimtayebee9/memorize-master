import gameClasses from './../styles/Game.module.css';

const SingleCard = (props) => {
    const handleClick = () => {
        props.handleClick(props.card);
    }

    return (
        <div className={gameClasses.card} >
            <div className={ props.isFlipped || props.isMatched ? gameClasses.flipped : ""} >
                <img src={props.card.src} className={gameClasses.cardFront + " img-fluid w-100"}  alt=""></img>
                <img src="assets/img/empty.jpg" className= {gameClasses.cardBack + " img-fluid w-100"} alt="" onClick={handleClick}></img>
            </div>
        </div>
    );
}

export default SingleCard;