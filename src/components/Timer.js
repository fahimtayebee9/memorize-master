import React, { useEffect, useState } from 'react';
import gameClasses from './../styles/Game.module.css';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        setMinutes(Math.floor(props.time / 60));
        setSeconds(props.time - minutes * 60);
        
    }, [props.time]);

    return (
        <div className={gameClasses.timer}>
            <span className="timer-count">
                <p className="d-inline m-0 mr-2">Remaining Time:</p>{ minutes === 0 && seconds === 0
                    ? null
                    : <span className="m-0"> {`${minutes} min`} : {seconds < 10 ?  `0${seconds} sec` : `${seconds} sec`}</span> 
                }
            </span>
        </div>
    );
}

export default Timer;