import Notes from "../model/notes.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find({});
    return res.json(notes);
  } catch (error) {
    console.log(error);
  }
};
