//notehome.jsx
import TopBar from "./components/topbar";
import ActionBar from "./components/actionBar";
import NotesGridContainer from "./components/NotesGridContainer";
import { useState } from "react";
import EditNote from "./EditNote";
import { getNoteList } from "../../hooks/notes/useNotePreview";

export const NoteHome = () => {
    const [activeNote, setActiveNote] = useState(null);


    const [sortBy, setSortBy] = useState("updated_at");
    const [order, setOrder] = useState("desc");

    const { notes, loading, refreshNotes } = getNoteList({ sortBy, order });

    const handleAddNote = () => {
        setActiveNote({ note_id: undefined }); // new note
    };

    const handleSave = async (note_id) => {
        await refreshNotes();   // re-fetch updated notes from backend
        setActiveNote(null);    // close modal after refresh
    };

    const handleDelete = async (note_id) => {
        await refreshNotes();   // re-fetch updated notes
        setActiveNote(null);    // close modal
    };

    return (
        <div id="noteHome">
            <TopBar />
            <ActionBar onAddNote={handleAddNote} onSortChange={(newSortBy, newOrder) => {
                setSortBy(newSortBy);
                setOrder(newOrder);
            }} />
            <NotesGridContainer notes={notes} loading={loading} />

            {activeNote && (
                <EditNote
                    note={activeNote}
                    onClose={() => setActiveNote(null)}
                    onSave={handleSave}
                    onDelete={handleDelete}
                />
            )}
        </div>
    )
}

export default NoteHome;