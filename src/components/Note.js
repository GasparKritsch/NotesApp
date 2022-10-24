import {IoCloseCircleOutline} from "react-icons/io5";

const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div className="note">
            <div className="noteBody">
                <p>{text}</p>
            </div>
            <div className="noteFooter">
                <p>{date}</p>
                <IoCloseCircleOutline onClick={() => handleDeleteNote(id) } className="deleteNoteIcon"/>
            </div>
        </div>
    );
}
 
export default Note;