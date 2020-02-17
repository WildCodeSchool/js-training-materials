import React from 'react';
import './Gif.css';

const Gif = ({ gif, onClick }) => {
    const handleClickGif = () => {
        onClick(gif);
    }
    return (
        <img 
            className="gif" 
            src={gif.images.downsized_large.url} 
            alt=''
            onClick={handleClickGif}
        />
    )
};

export default Gif;
