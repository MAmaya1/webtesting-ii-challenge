import React from 'react';

const Dashboard = props => {
    return (
        <div className="dashboard">
            <button onClick={props.countBalls}>Ball</button>
            <button onClick={props.countFouls}>Foul</button>
            <button onClick={props.countStrikes}>Strikes</button>
            <button onClick={props.hit}>Hit!</button>
        </div>
    )
}

export default Dashboard;