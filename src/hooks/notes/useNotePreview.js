// src/hooks/notes/useNotesPreview.js
import { useState, useEffect, useMemo } from "react";
import { notesApi } from "../../services/notes.service";
import { useCallback } from "react";


export const getNoteList = ({ sortBy = "updated_at", order = "desc" } = {}) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    try {
      const data = await notesApi.getUserNotes(sortBy, order);
      setNotes(data);
    } catch (err) {
      console.error("Failed to fetch notes:", err.message);
      setNotes([]);
    } finally {
      setLoading(false);
    }
  }, [sortBy, order]);

  // Fetch notes initially and whenever sort/order change
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Expose a manual refresh function
  const refreshNotes = useCallback(async () => {
    return await fetchNotes();
  }, [fetchNotes]);

  return { notes, loading, refreshNotes };
};



// preview content of note
export const useNotePreviewContent = (description) => {
  return useMemo(() => {
    if (!description) return null;

    try {
      // If description is HTML, we can return a preview by stripping tags
      // or just returning it as-is. Here we’ll grab the text content.
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = description;
      const text = tempDiv.textContent || tempDiv.innerText || "";

      // Return first 1–2 sentences or a truncated preview
      return text.length > 100 ? text.slice(0, 100) + "..." : text;
    } catch (err) {
      console.error("Invalid note description HTML:", err);
      return null;
    }
  }, [description]);
};