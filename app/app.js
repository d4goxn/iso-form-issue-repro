import React from "react";

class App extends React.Component {
	constructor( props ) {
		super();

		this.state = {
			value: props.initialInput || ""
		};
	}

	render() {
		return (
			<div>
				<form>
					<input
						value = { this.state.value }
						onChange = { event => { this.setState({ value: event.target.value })}} />
				</form>
				<div>App input state: <pre>{ this.state.value }</pre></div>
				<button onClick = { this.save }>Save</button>
			</div>
		);
	}

	save() {
		alert( "Does the input value match the app state?" );
	}
}

export default App;
