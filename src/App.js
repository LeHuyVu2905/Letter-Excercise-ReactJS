import React from 'react';
import './App.css';
import Validation from './Validation';
import Chart from './Chart';
import Radium, { StyleRoot } from 'radium';

class App extends React.Component {
	state = {
		userInput: ''
	};

	changeText = (e) => {
		this.setState({
			userInput: e.target.value
		});
	}

	deleteLetter = (index) => {
		let text = this.state.userInput.split('');
		text.splice(index, 1);

		let updateText = text.join('');
		this.setState({
			userInput: updateText
		});
	}

	render() {

		let processLetter = this.state.userInput.split('').map((letter, index) => {
			return <Chart letter={letter} key={index} delete={() => this.deleteLetter(index)} />;
		});

		return (
			<StyleRoot>
				<div className="App">
					<Validation text={this.state.userInput.length} />
					<input type="text" value={this.state.userInput} onChange={this.changeText} />
					<div>
						{processLetter}
					</div>
				</div>
			</StyleRoot>
		);
	}	
}

export default Radium(App);
