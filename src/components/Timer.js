import gameClasses from './../styles/Game.module.css';

const Timer = () => {
    return (
        <div className={gameClasses.timer}>
            <span className="timer-count">00:00</span>
            <span className="timer-text ml-2">Time</span>
        </div>
    );
}

export default Timer;