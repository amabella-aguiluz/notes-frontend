//notesgridcontainer.jsx 
import { React, useState } from "react";
import EditNote from "../EditNote";
import { getNoteList } from "../../../hooks/notes/useNotePreview";
import NotePreview from "./NotePreview";


const NotesGridContainer = ({ notes = [], loading, onOpenNote }) => {
  if (loading) return "Loading notes...";

  return (
    <div>

      {/* // displays map of notes  */}
      <div style={{ display: "grid", gap: "1rem" }}>
        {notes.length > 0 ? (
          notes.map((note) => (
            <NotePreview
              key={note.note_id}
              id={note.note_id}
              title={note.title}
              description={note.description}
              updated_at={note.updated_at}
              created_at={note.created_at}
              onOpen={() => onOpenNote(note)}
            />
          ))
        ) : (
          <p>You don’t have any notes.</p>
        )}
      </div>
    </div>
  );
};

export default NotesGridContainer;