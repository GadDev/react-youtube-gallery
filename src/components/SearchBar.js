import { Component } from 'react';

class SearchBar extends Component {
	state = {
		term: '',
	};

	onSubmitForm = (event) => {
		event.preventDefault();
		console.log(this.state.term);
		this.props.onFormSubmit(this.state.term);
	};
	render() {
		return (
			<div className='ui segment search-bar' onSubmit={this.onSubmitForm}>
				<form action='' className='ui form'>
					<div className='field'>
						<label htmlFor='search-video'>Video search</label>
						<input
							type='text'
							name='search-video'
							value={this.state.term}
							onChange={(event) =>
								this.setState({ term: event.target.value })
							}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
