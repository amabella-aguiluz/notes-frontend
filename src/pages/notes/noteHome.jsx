//NoteHome.jsx
import TopBar from "./components/TopBar";
import ActionBar from "./components/ActionBar";
import NotesGridContainer from "./components/NotesGridContainer";
import { useState } from "react";
import EditNote from "./EditNote";
import { getNoteList } from "../../hooks/notes/useNotePreview";
import "../../styles/notes.css";
import texture from "../../assets/wood.jpg";

export const NoteHome = () => {
    const [activeNote, setActiveNote] = useState(null);

    const [sortBy, setSortBy] = useState("updated_at");
    const [order, setOrder] = useState("desc");
    const [searchQuery, setSearchQuery] = useState("");
    const { notes, loading, refreshNotes } = getNoteList({ sortBy, order, query: searchQuery });

    const handleAddNote = () => {
        setActiveNote({ note_id: undefined });
    };

    return (
        <div className="flex flex-col p-10 w-full min-h-screen box-border gap-2.5"
            style={{
                backgroundImage: `url(${texture})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <TopBar />
            <div>
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
        </div >
    )
}

export default NoteHome;