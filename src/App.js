import './App.css';
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';

function App() {

  const [notes, setNotes] = useState([
    {id : nanoid(),
    text: 'Hola, Bienvenido a mi app de notas!',
    date: '9/12/18'},
    {id : nanoid(),
    text: 'Hola, Bienvenido a mi app de notas!',
    date: '9/12/18'},
    {id : nanoid(),
    text: 'Hola, Bienvenido a mi app de notas!',
    date: '9/12/18'}
  ])

  const [searchText, setSearchText] = useState('')
  
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
  
  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	}


  return (
    <div className="App">
      <Header handleSearchText={setSearchText} />
      <NotesList notes={notes.filter(note=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
