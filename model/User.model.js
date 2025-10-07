import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const password = this.password;
  const hashPass = await bcrypt.hash(password, 10);
  this.password = hashPass;
  console.log(hashPass);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
