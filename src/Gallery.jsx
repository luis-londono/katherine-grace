import React from 'react';
import Carolina from './images/carolina.jpg';

const Gallery = () => {
    return (
        <div>
            <h2 style={{ marginBottom: "24px" }}>Images</h2>
            <img id="carolina" src={Carolina} alt="carolina"></img>
        </div>
    );
};

export default Gallery;