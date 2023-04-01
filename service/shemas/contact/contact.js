const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
},
{timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at' 
}});

const Contact = model("contact", blogSchema);

module.exports = Contact;
