import React from 'react';

const Dashboard = props => {
    return (
        <div className="dashboard">
            <button onClick={props.countBalls}>Ball</button>
            <button onClick={props.countFouls}>Foul</button>
            <button onClick={props.countStrikes}>Strikes</button>
        </div>
    )
}

export default Dashboard;