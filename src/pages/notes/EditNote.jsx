// src/pages/notes/EditNote.jsx
import { NoteTitleBar, NoteBodyEditor } from "./components/NoteTitleBar.jsx";
import { useLocalTime } from "../../util/localTime.js";
import { useNote } from "../../hooks/notes/useNote.js";
import { useEditor } from '@tiptap/react';
import { useWindow } from "../../hooks/notes/useWindow.js";
import React from "react";
import StarterKit from '@tiptap/starter-kit';
import { Divider } from "@mui/material";


const EditNote = ({ note, onClose }) => {
  const { open, handleOpen, handleClose } = useWindow();

  // Open modal when component mounts
  React.useEffect(() => {
    if (note) handleOpen();   // only open if a note is set
  }, [note, handleOpen]);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    editorProps: {
    attributes: {
      // 'h-full' makes the editable area fill the EditorContent container
      // 'outline-none' removes the blue border when clicking
      class: 'h-full p-2 rounded-lg outline-none text-base', 
    },
  },
});

  const {
    title,
    setTitle,
    saveNote,
    deleteNote,
    updated_at,
    created_at,
    setTimestamps,
  } = useNote({ note_id: note.note_id, editor });

  // If modal closed internally, notify parent
  const closeNote = () => {
    handleClose(); // close internal window
    if (onClose) onClose();  // tell parent
  };


  if (!open) return null; // don't render if closed

  return (
    <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display:'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999}}
    onClick={closeNote}>
    <div className="bg-gray-100 p-6 rounded-md w-[30%] h-[60%] flex flex-col gap-1 " 
        onClick={e => e.stopPropagation() }
     >
      <NoteTitleBar 
        title={title}
        setTitle={setTitle}
        onSave={saveNote}
        onDelete={deleteNote}
      />

      <p className="italic">Last modified: {useLocalTime(updated_at)}</p>
      <p className="italic">Created: {useLocalTime(created_at)}</p>

      <Divider />

      <NoteBodyEditor className="flex-1" editor={editor} />
    </div>
    </div>
  );
};

export default EditNote;