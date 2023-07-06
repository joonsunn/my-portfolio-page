import logo from './logo.svg';
import './App.css';
import { Card, CardList } from './components/cards';
import { projectsList, profileWriteUp } from './info';
import { Writeup } from './components/writeup';
import { Navbar } from './components/navbar';
import { useState } from 'react';

function App() {
	const [filter, setFilter] = useState('')
	
	const projectStringsFilter = (listItem, filter) => {
		if (listItem.title.toLowerCase().includes(filter) || listItem.description.toLowerCase().includes(filter) || listItem.techUsed.toLowerCase().includes(filter)) {
			return true
		} else {
			return false
		}
	}
	return (
    <div className="App">
		<Navbar></Navbar>
		<Writeup writeup={profileWriteUp}></Writeup>
		<div>
			<input placeholder='filter' onChange={(event) => {setFilter(event.target.value); console.log(event.target.value)}}></input>
		</div>
		<div style={{marginTop: '20px', color: 'white'}}>Below is a list of my projects. Use the input field above to filter for any keywords you may be interested in.</div>
		<CardList projectsList={projectsList.filter(listItem => projectStringsFilter(listItem, filter))}></CardList>
    </div>
  );
}

export default App;
