import React from 'react';
import Carolina from './images/carolina.jpg';

const Gallery = () => {
    return (
        <div>
            <p>pics go here</p>
            <img id="carolina" src={Carolina} alt="carolina"></img>
        </div>
    );
};

export default Gallery;