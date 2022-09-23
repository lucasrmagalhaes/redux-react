import React from 'react';

import './Card.css';

function getColor({ red, green, blue, purple }) {
    if (red) return "Red";
    if (green) return "Green";
    if (blue) return "Blue";
    if (purple) return "Purple";

    return "";
}

const Card =  (props) => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className='Header'>
                <span className='Title'>
                    {props.title}
                </span>
            </div>

            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}

export default Card;