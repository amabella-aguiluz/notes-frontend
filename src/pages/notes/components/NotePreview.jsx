//notespreview.jsx
import { useLocalTime } from "../../../util/localTime";
import { useNotePreviewContent } from "../../../hooks/notes/useNotePreview";

// the preview of a note
// TODO:
// rotate when hovered over 
export const NotePreview = ({ id, title, description, updated_at, created_at, onOpen }) => {
    // Get the first paragraph block 
    const firstParagraph = useNotePreviewContent(description);

    return (
        <div className="h-[250px] bg-gray-100 p-4 rounded-md shadow-sm flex flex-col gap-2 cursor-pointer 
            transition-transform transition-shadow duration-200 
            hover:scale-[1.05] hover:-translate-y-1 hover:rotate-[3deg] hover:shadow-lg" onClick={onOpen}>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm italic">Last modified: {useLocalTime(updated_at)}</p>
                <p className="text-sm italic">Created: {useLocalTime(created_at)}</p>
                <p>{firstParagraph || "No content"}</p> {/* Show only first paragraph */}
            </div>
        </div>
    );
};

export default NotePreview;