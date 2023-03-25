const { Schema, model } = require("mongoose");

const bcrypt = require('bcrypt');

const saltRounds = 10;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

userSchema.pre('save', async function(next) {
  console.log("I am hear");
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(saltRounds);
  this.password = await bcrypt.hash(this.password, salt);
  
  next();
});

const User = model("user", userSchema);

module.exports = {User, userSchema};
