import React from 'react';
import icon from '../../../images/icon-cross.svg';

const CrossButton = () => {
    return (
        <button className='cross'>
             <img src={icon}/>
        </button>
    );
}

export default CrossButton;