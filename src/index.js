import React, {Component} from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

import _ from 'lodash';

import YTSearch from 'youtube-api-search';

//Youtube data api key 3 from https://console.developers.google.com/apis/
const YT_API = 'AIzaSyBx01-DaqrfXDj0yapnbPpOhdcuXc7nUQg';

class App extends Component{

constructor(props){
	super(props);
	this.state={videos:[]};
	this.videoSearch('');

}
videoSearch(term){
	YTSearch({key:YT_API, term:term, max:'10'}, 
	(data)=>{this.setState({
							videos:data, 
							selectedVideo: data[0]
							})});
}

	render(){
		const videoSearchDebounce = _.debounce((term)=>{this.videoSearch(term)}, 300);
		return (
			<div>
				<SearchBar onSearchBarChange={videoSearchDebounce}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect= {selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos} />
			</div>
			);
	}
}

//component's generated html on page
ReactDom.render(<App/>, document.querySelector(".container"));
