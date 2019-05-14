import React from 'react';

const Display = props => {
    return (
        <div className="display">
            <p><strong>Balls:</strong> {props.balls}</p>
            <p><strong>Fouls:</strong> {props.fouls}</p>
            <p><strong>Strikes:</strong> {props.strikes}</p>
        </div>
    )
}

export default Display;