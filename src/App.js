import './App.css';
import React from 'react';

function App() {
	const [state, setState] = React.useState({
		master: '',
		description: '',
	});
	const api = 'http://kaiaman.pythonanywhere.com/masters/5/';
	fetch(api)
		.then(response => response.json())
		.then(data => {
			setState({
				master: data,
			});
		});

	const MasterTwo = masterT => {
		return <div></div>;
	};
	return (
		<div className='App'>
			<h1>
				Имя - {state.master.name}
				<br />
			</h1>
			<p>Описание - {state.master.description}</p>
		</div>
	);
}

export default App;
