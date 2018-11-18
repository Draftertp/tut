import React from 'react';

class Count extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		}
	}

	add() {
		this.setState({
			count: this.state.count+1
		});
	}

	remove() {
		this.setState({
			count: this.state.count-1,
		})
	}

	render() {
			return (
				<div>
					<button onClick={() => this.add()}>+</button>
					<button onClick={() => this.remove()}>-</button>
					{ this.state.count }
				</div>
			);
	}
}

export default Count;