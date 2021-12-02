import levelClasses from './../styles/Level.module.css';
import Levels from "./Data";

const LevelComponent = (props) => {
    const startLevel = (index) => {
        props.startGame(index);
    }
    return (
        <div className={levelClasses.levelContainer}>
            <div className="row">
                {Levels.map((level, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <div className={levelClasses.level}>
                                <div className="img-box">
                                    <img src={level.cover} className="img-fluid w-100" alt=""></img>
                                </div>
                                <div className={levelClasses.content + " d-flex justify-content-between align-items-center"}>
                                    <div className="left">
                                        <h3>Mode:<span className={level.badge + " badge ml-2"}>{level.name}</span></h3>
                                        <p className="m-0">Grid: {level.grid} x {level.grid - 1}</p>
                                        <p className="m-0">Max Moves: {level.maxMoves}</p>
                                        <p className="m-0">Time: {level.maxTime} seconds</p>
                                    </div>
                                    <div className="right">
                                        <button type="button" className={levelClasses.btnCustom + " btn btn-primary btn-start"} onClick={() => {startLevel(index);}}>Play</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
}

export default LevelComponent;