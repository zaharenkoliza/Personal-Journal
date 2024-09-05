import './App.css';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import { useState } from 'react';

const INITIAL_DATE = [
	// {
	// 	id: 1,
	// 	title: 'fff',
	// 	text: 'fff',
	// 	date: new Date()
	// },
	// {
	// 	id: 2,
	// 	title: 'eeeee',
	// 	text: 'fffeeee',
	// 	date: new Date()
	// }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATE);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header></Header>
				<JournalAddButton/>
				<JournalList items={items}/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}></JournalForm>
			</Body>
		</div>
	);
}

export default App;
