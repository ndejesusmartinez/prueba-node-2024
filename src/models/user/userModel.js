import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contraseña: {
    type: String,
    required: true,
    minlength: 6
  }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('contraseña')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10); 
  this.contraseña = await bcrypt.hash(this.contraseña, salt); 
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.contraseña);
};


const User = model('users', userSchema);

export default User;
