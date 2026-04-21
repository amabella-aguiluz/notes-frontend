//notespreview.jsx
import { useLocalTime } from "../../../util/localTime";
import { useNotePreviewContent } from "../../../hooks/notes/useNotePreview";
import { useMemo } from "react";

import shape1 from "../../../assets/note-shape/note_1.svg";
import shape2 from "../../../assets/note-shape/note_2.svg";
import shape3 from "../../../assets/note-shape/note_3.svg";
import texture from "../../../assets/paper-texture.avif";

const SHAPES = [shape1, shape2, shape3];

// the preview of a note
export const NotePreview = ({ id, title, description, updated_at, created_at, onOpen }) => {
    // Get the first paragraph block 
    const firstParagraph = useNotePreviewContent(description);

    const randomShape = useMemo(() => {
        return SHAPES[Math.floor(Math.random() * SHAPES.length)];
    }, []);

    const initialRotation = useMemo(() => (Math.random() * 4 - 2).toFixed(1), []);

    return (
        <div
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.05] hover:-translate-y-1"
            onClick={onOpen}
            style={{
                display: "inline-block",
                filter: "drop-shadow(-10px 14px 10px rgba(0,0,0,0.25))"
            }}>
            <div className="h-[300px] p-7 bg-gray-200 flex flex-col gap-2 cursor-pointer 
                transition-transform transition-shadow duration-200 
                hover:scale-[1.05] hover:-translate-y-1 hover:rotate-[3deg]"
                onClick={onOpen}
                style={{
                    WebkitMaskImage: `url(${randomShape})`,
                    maskImage: `url(${randomShape})`,
                    WebkitMaskSize: '100% 100%',
                    maskSize: '100% 100%',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',

                    backgroundImage: `url(${texture})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                    backgroundColor: '#dadada',
                    transform: `rotate(${initialRotation}deg)`,
                }}
            >
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-sm italic">Last modified: {useLocalTime(updated_at)}</p>
                    <p className="text-sm italic">Created: {useLocalTime(created_at)}</p>
                    <p>{firstParagraph || "No content"}</p> {/* Show only first paragraph */}
                </div>
            </div >
        </div>
    );
};

export default NotePreview;