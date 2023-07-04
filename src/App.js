import logo from './logo.svg';
import './App.css';
import { Card, CardList } from './components/cards';
import { projectsList, profileWriteUp } from './info';
import { Writeup } from './components/writeup';
import { Navbar } from './components/navbar';
import { useState } from 'react';

function App() {
	const [filter, setFilter] = useState('')
	
	return (
    <div className="App">
		<Navbar></Navbar>
		<Writeup writeup={profileWriteUp}></Writeup>
		<div>
			<input placeholder='filter' onChange={(event) => {setFilter(event.target.value); console.log(event.target.value)}}></input>
		</div>
		<div style={{marginTop: '20px'}}>Below is a list of my projects. Use the input field above to filter for any keywords you may be interested in.</div>
		<CardList projectsList={projectsList}></CardList>
    </div>
  );
}

export default App;
