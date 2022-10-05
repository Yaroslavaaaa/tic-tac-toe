import React from 'react';
//import 'App.css'

const Square = ({value, handleClick, index}) => {
    return (
        <div>
            <button className='square' onClick={()=>handleClick(index)}>{value}</button>
        </div>
    );
}

export default Square;
