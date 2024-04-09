import React from 'react';
import icon from '../../../images/icon-check.svg';

const CheckButton = () => {
    return (
        <button className='check'>
             <img src={icon} />
        </button>
    );
}

export default CheckButton;