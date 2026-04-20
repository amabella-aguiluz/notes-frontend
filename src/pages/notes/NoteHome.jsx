//NoteHome.jsx
import TopBar from "./components/TopBar";
import ActionBar from "./components/ActionBar";
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
    const { notes, loading, refreshNotes } = getNoteList({ sortBy, order, query: searchQuery });

    const handleAddNote = () => {
        setActiveNote({ note_id: undefined }); // new note
    };

    return (
        <div className="flex flex-col py-5 px-10 w-full box-border gap-2.5">
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
                    onRefresh={refreshNotes}
                />
            )}
        </div>
    )
}

export default NoteHome;