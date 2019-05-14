import React from 'react';

const Display = props => {
    return (
        <div className="display">
            <p><strong>Balls:</strong> {props.balls}</p>
            <p><strong>Strikes:</strong> {props.strikes}</p>
            <p><strong>Fouls:</strong> {props.fouls}</p>
        </div>
    )
}

export default Display;