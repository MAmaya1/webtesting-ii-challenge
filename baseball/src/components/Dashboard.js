import React from 'react';

const Dashboard = props => {
    return (
        <div className="dashboard">
            <button onClick={props.countBalls}>Ball</button>
        </div>
    )
}

export default Dashboard;