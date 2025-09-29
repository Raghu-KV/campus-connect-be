import { Schema, model } from "mongoose";

const notesSchema = new Schema({
  notesTitle: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },

  userDep: {
    type: String,
    require: true,
    enum: ["CSE", "AIDS", "CSBS", "ECE"],
  },
  subject: {
    type: String,
    require: true,
  },
});

export default Notes = model("Notes", notesSchema);
