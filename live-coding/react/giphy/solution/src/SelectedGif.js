import React from 'react';
import './Gif.css';

const SelectedGif = ({ gif }) => {
    return (
        <div className="gif-selected">
            <img 
                src={gif.images.downsized_large.url} 
                alt=''
            />
            <a href={gif.url} target="_blank" rel="noopener noreferrer">{gif.url}</a>
        </div>
    )
};

export default SelectedGif;
