import { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
	};
	componentDidMount() {
		this.onTermSubmit('hello world');
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term,
			},
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelected = (video) => {
		console.log(video);
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className='ui container'>
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								videos={this.state.videos}
								onVideoSelected={this.onVideoSelected}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;