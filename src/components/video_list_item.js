import React from 'react';

const VideoListItem = (props)=>{
	return (<li className="video-list-item" onClick= {()=> props.onVideoSelect(props.video)} >
				<div className="media" >
					<div className="media-left">
						<img src={props.video.snippet.thumbnails.default.url}	/>
					</div>
					<div className="media-body">
					<div className="media-description">{props.video.snippet.title}</div>
					</div>
				</div>
			</li>);
}

export default VideoListItem;