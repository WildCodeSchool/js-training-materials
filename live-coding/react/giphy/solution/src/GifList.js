import React from 'react';
import Gif from './Gif';
import './GifList.css';

const GifList = ({ gifs, onClick }) => (
    <div className="gif-list">
        {
            gifs.map(gif => <Gif key={gif.id} gif={gif} onClick={onClick}/>)
        }
    </div>
);

export default GifList;
