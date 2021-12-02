import Levels from "./Data";
import Move from "./Moves";
import Timer from "./Timer";

const WelcomeComponent = () => {
    return (
        <div className="mdl">
            <h1 className="title">Memory Game</h1>
            <p className="description">Choose Level</p>
            <div className="col-md-4 m-auto">
                <div className="display-game d-flex align-items-center justify-content-between">
                    
                    <Move />
                    
                    <Timer />
                </div>
            </div>
            <div className="level-container">
                <div className="row">
                    {Levels.map((level, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="level">
                                    <div className="img-box">
                                        <img src={level.cover} className="img-fluid w-100" alt=""></img>
                                    </div>
                                    <div className="content d-flex justify-content-between align-items-center">
                                        <div className="left">
                                            <h3>Mode:<span className={level.badge + " badge ml-2"}>{level.name}</span></h3>
                                            <p>Grid: {level.grid} x {level.grid}</p>
                                        </div>
                                        <div className="right">
                                            <button type="button" className="btn btn-primary btn-start btn-custom">Play</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    );
}

export default WelcomeComponent;