//notehome.jsx
import TopBar from "./components/topbar";
import ActionBar from "./components/actionBar";
import NotesGridContainer from "./components/NotesGridContainer";
import { useState } from "react";
import EditNote from "./EditNote";
export const NoteHome = () => {
    const [activeNote, setActiveNote] = useState(null);

    const [sortBy, setSortBy] = useState("updated_at");
    const [order, setOrder] = useState("desc");


    const handleAddNote = () => {
        setActiveNote({ note_id: undefined }); // new note
    };

    return (
        <div id="noteHome">
            <TopBar />
            <ActionBar onAddNote={handleAddNote} onSortChange={(newSortBy, newOrder) => {
                setSortBy(newSortBy);
                setOrder(newOrder);
            }}/>
            <NotesGridContainer sortBy={sortBy}
                order={order}/>

            {activeNote && (
                <EditNote
                    note={activeNote}
                    onClose={() => setActiveNote(null)}
                />
            )}
        </div>
    )
}

export default NoteHome;