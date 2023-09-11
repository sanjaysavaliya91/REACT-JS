import { useState , useEffect} from "react";
function Player(props)
{
    var [six,setSix] = useState(0);
    var [four , setFour] = useState(0);
    var [three , setThree] = useState(0);
    var [two , setTwo] = useState(0);
    var [one , setOne] = useState(0);
    var [dot , setDot] = useState(0);
    var [run , setRun] = useState(0);
    var [ball , setBall] = useState(0);
    var [strikerate , setStrikerate] = useState(0);

    const UpdateStrikeRate = () =>{
        setStrikerate((run/ball) * 100);
    }
    const UpdateScore = (score) => {
        setRun(run + score);
        setBall(ball + 1);
        if(score === 6)
        {
            setSix(six +1);
        }
        else if(score === 4)
        {
            setFour(four + 1);
        }
        else if(score === 3)
        {
            setThree(three + 1);
        }
        else if(score === 2)
        {
            setTwo(two + 1);
        }
        else if(score === 1)
        {
            setOne(one + 1);
        }
        else if(score === 0)
        {
            setDot(dot + 1);
        }
    }
    useEffect(() => {
        UpdateStrikeRate();
    });

    return (<div className="col-12">
            <div className="card">
                <div className="card-header">
                    {props.name} [{props.possition}]
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">Run {run}</div>
                        <div className="col-2">Ball {ball}</div>
                        <div className="col-2">Strike Rate {strikerate.toFixed(2)}</div>
                        <div className="col-1">6s {six}</div>
                        <div className="col-1">4s {four}</div>
                        <div className="col-1">3s {three}</div>
                        <div className="col-1">2s {two}</div>
                        <div className="col-1">1s {one}</div>
                        <div className="col-1">Dot {dot}</div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-2">
                                <button onClick={() => UpdateScore(6)} className="btn btn-danger w-100">6</button>
                            </div>
                            <div className="col-2">
                                <button onClick={() => UpdateScore(4)} className="btn btn-primary w-100">4</button>
                            </div>
                            <div className="col-2">
                                <button onClick={() => UpdateScore(3)} className="btn btn-secondary w-100">3</button>
                            </div>
                            <div className="col-2">
                                <button onClick={() => UpdateScore(2)} className="btn btn-dark w-100">2</button>
                            </div>
                            <div className="col-2">
                                <button onClick={() => UpdateScore(1)} className="btn btn-info w-100">1</button>
                            </div> 
                            <div className="col-1">
                                <button onClick={() => UpdateScore(0)} className="btn btn-success w-100">0</button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
function Match()
{
    return(<div className="comtainer mt-4">
        <div className="row">
            <div className="col-12 justify-contant-center">
                <h1>India VS Englend</h1>
            </div>
        </div>
        <div className="row mt-3">
            <Player name='Subhman Gill' possition='1' /> 
           
        </div>
    </div>);
}
export default Match;