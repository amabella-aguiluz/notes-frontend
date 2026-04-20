// src/components/NoteTitleBar.jsx
import ClickIcon from './ClickIcon';
import save from '../../../assets/icons/Notes_assets/save.png'
import del from '../../../assets/icons/Notes_assets/delete.png'


// edit title bar
export const NoteTitleBar = ({ title, setTitle, onSave, onDelete }) => {
  return (
    <div className="m-5px flex justify-between">
      {/* input title */}
      <input className="font-bold text-3xl"
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* clickable icons */}
      
      <div className="flex flex-row">
        <ClickIcon
          src={save}
          alt="Save"
          onClick={onSave}
        />
        <ClickIcon
          src={del}
          alt="Delete"
          onClick={onDelete}
        />
      </div>

    </div>
  );
};

// src/components/NoteBodyEditor.jsx
import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'

// edit note body
export const NoteBodyEditor = ({ editor }) => {
  if (!editor) return null;
  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden rounded-lg">
      <>
        <TextMenu editor={editor} />
        <EditorContent className="flex-1 overflow-y-auto" editor={editor} />
      </>
    </div>
  );
};

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const TextMenu = ({ editor }) => {
  if (!editor) return null;

  // todo: make the buttons smaller
  return (
    <BubbleMenu className="bubbleMenu" editor={editor}>
      <button className="bubbleButton" onClick={() => editor.chain().focus().toggleBold().run()}>
        <FormatBoldIcon />
      </button>
      <button className="bubbleButton" onClick={() => editor.chain().focus().toggleItalic().run()}>
        <FormatItalicIcon />
      </button>
      <button className="bubbleButton" onClick={() => editor.chain().focus().toggleStrike().run()}>
        <StrikethroughSIcon />
      </button>
      <button className="bubbleButton" onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <FormatListBulletedIcon />
      </button>
    </BubbleMenu>);
};