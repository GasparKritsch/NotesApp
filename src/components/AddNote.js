import { useState } from "react";

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('')

    const characterLimit = 200

    const handleChange = (e) => {
        if(e.target.value.length <= 200 ){
            setNoteText(e.target.value)}
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className="addNote">
            <div className="addNoteText">
                <textarea cols="33"
                rows="8" 
                placeholder="Add a new note..."
                value={noteText}
                onChange={handleChange}>
                </textarea>
            </div>
            <div className="addNoteFooter">
                <p className="chars">{characterLimit - noteText.length} Remaining</p>
                <button onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}
 
export default AddNote;