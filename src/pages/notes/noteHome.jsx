//notehome.jsx
import TopBar from "./components/topbar";
import ActionBar from "./components/actionBar";
import NotesGridContainer from "./components/NotesGridContainer";
import { useState } from "react";
import EditNote from "./EditNote";
import { getNoteList } from "../../hooks/notes/useNotePreview";
import "../../styles/notes.css";

export const NoteHome = () => {
    const [activeNote, setActiveNote] = useState(null);

    const [sortBy, setSortBy] = useState("updated_at");
    const [order, setOrder] = useState("desc");
    const [searchQuery, setSearchQuery] = useState("");
    const { notes, loading } = getNoteList({ sortBy, order, query: searchQuery });

    const handleAddNote = () => {
        setActiveNote({ note_id: undefined }); // new note
    };

    return (
        <div className="noteHome">
            <TopBar />
            <ActionBar onAddNote={handleAddNote}
                onSortChange={(newSortBy, newOrder) => {
                    setSortBy(newSortBy);
                    setOrder(newOrder);
                }}
                onSearch={(q) => setSearchQuery(q)} />
            <NotesGridContainer
                notes={notes}
                loading={loading}
                onOpenNote={(note) => setActiveNote(note)} />

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