// src/pages/notes/EditNote.jsx
import { NoteTitleBar, NoteBodyEditor } from "./components/NoteTitleBar.jsx";
import { useLocalTime } from "../../util/localTime.js";
import { useNote } from "../../hooks/notes/useNote.js";
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';


const EditNote = ({ note, onClose, onSave, onDelete }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
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

  const handleSave = async () => {
    await saveNote();
    if (onSave) onSave();
    if (onClose) onClose();
  };

  const handleDelete = async () => {
    await deleteNote();
    if (onDelete) onDelete(); 
    if (onClose) onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
      }}
      onClick={onClose}>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          width: 'auto',
          maxHeight: '100%',
          height: 'auto',
          overflowY: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        <NoteTitleBar
          title={title}
          setTitle={setTitle}
          onSave={handleSave}
          onDelete={handleDelete}
        />

        <p>Last modified: {useLocalTime(updated_at)}</p>
        <p>Created: {useLocalTime(created_at)}</p>

        <NoteBodyEditor editor={editor} />
      </div>
    </div>
  );
};

export default EditNote;