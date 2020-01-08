import React from 'react';
import './scss/VideoItem.scss';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick={ () => onVideoSelect(video) } className="video-item item">
            <img src={video.snippet.thumbnails.medium.url} className="ui image" alt="" />
            <div className="content">
                <span className="header">{video.snippet.title}</span>
            </div>
        </div>
    )    
}

export default VideoItem;