// src/pages/notes/EditNote.jsx
import { NoteTitleBar, NoteBodyEditor } from "./components/NoteTitleBar.jsx";
import { useLocalTime } from "../../util/localTime.js";
import { useNote } from "../../hooks/notes/useNote.js";
import { useEditor } from '@tiptap/react';
import { useWindow } from "../../hooks/notes/useWindow.js";
import React from "react";
import StarterKit from '@tiptap/starter-kit';
import { Divider } from "@mui/material";
import { useState, useMemo } from "react";

import shape1 from "../../assets/note-shape/note_1.svg";
import shape2 from "../../assets/note-shape/note_2.svg";
import shape3 from "../../assets/note-shape/note_3.svg";
import texture from "../../assets/paper-texture.avif";


const shapes = [shape1, shape2, shape3];


const EditNote = ({ note, onClose, onRefresh }) => {
  const { open, handleOpen, handleClose } = useWindow();

  const svgPath = useMemo(() => shapes[Math.floor(Math.random() * shapes.length)], []);

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

  const closeNote = () => {
    handleClose();
    if (onClose) onClose();
  };

  const handleSave = async () => {
    try {
      await saveNote();
      if (onRefresh) {
        onRefresh();
      }
      onClose();
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNote();
      if (onRefresh) onRefresh();
      onClose();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}
      onClick={closeNote}>
      <div className="bg-gray-100 p-10 pr-5 pl-15 rounded-md w-[25%] h-[70%] flex flex-col gap-1 "
        onClick={e => e.stopPropagation()}
        style={{
          maskImage: `url(${svgPath})`,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          backgroundColor: '#ffffff',

          backgroundImage: `url(${texture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <NoteTitleBar
          title={title}
          setTitle={setTitle}
          onSave={handleSave}
          onDelete={handleDelete}
      />

      <p className="italic">Last modified: {useLocalTime(updated_at)}</p>
      <p className="italic">Created: {useLocalTime(created_at)}</p>

        <p className="italic">Last modified: {useLocalTime(updated_at)}</p>
        <p className="italic">Created: {useLocalTime(created_at)}</p>

        <Divider />

        <NoteBodyEditor className="flex-1" editor={editor} />
      </div>
    </div>
  );
};

export default EditNote;