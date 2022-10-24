import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({notes , handleAddNote, handleDeleteNote}) => {
    return (
        <div className="notesListContainer">
            {notes.map(note => <Note key={note.id} id={note.id} title={note.title} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />)}
            <AddNote handleAddNote={handleAddNote}  />
        </div>
    );
}
 
export default NotesList;