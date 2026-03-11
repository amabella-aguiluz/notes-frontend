import { api } from "../api/api";

export const createNote = async (title, description) => {
    const { data } = await api.post("/notes", { title, description });
    return data;
}

export const updateNote = async (note_id, title, description) => {
    const { data } = await api.put(`/notes/${note_id}`, { title, description });
    return data;
}

export const deleteNote = async (note_id) => {
    const { data } = await api.delete(`/notes/${note_id}`);
    return data;
}

export const getNoteById = async (note_id) => {
    const { data } = await api.get(`/notes/${note_id}`);
    return data;
}

export const searchNotes = async (query, sortBy = "updated_at", order = "desc") => {
    const { data } = await api.get("/notes/search", {
        params: { query, sortBy, order },
    });
    return data;
}

export const notesApi = {
    createNote,
    updateNote,
    deleteNote,
    getNoteById,
    searchNotes
}