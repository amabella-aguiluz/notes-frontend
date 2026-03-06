//notehome.jsx
import TopBar from "./components/topbar";
import ActionBar from "./components/actionBar";
import NotesGridContainer from "./components/NotesGridContainer";
import { useState } from "react";
import EditNote from "./EditNote";

export const NoteHome = () => {
    const [activeNote, setActiveNote] = useState(null);

    const handleAddNote = () => {
        setActiveNote({ note_id: undefined }); // new note
    };

    return (
        <div id="noteHome">
            <TopBar />
            <ActionBar onAddNote={handleAddNote} />
            <NotesGridContainer />

            {activeNote && <EditNote note={activeNote} />}
        </div>
    )
}

export default NoteHome;