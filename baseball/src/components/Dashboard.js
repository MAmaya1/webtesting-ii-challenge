import React from 'react';

const Dashboard = props => {
    return (
        <div className="dashboard">
            <button onClick={props.countBalls}>Ball</button>
            <button onClick={props.countFouls}>Foul</button>
            <button onClick={props.countStrikes}>Strikes</button>
            {props.outs && (<p>Yer out!!</p>)}
        </div>
    )
}

export default Dashboard;