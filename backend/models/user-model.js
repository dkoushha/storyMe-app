const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },

    image: String,
    userName: String,
    about: String,
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    token: String,
    facebookId: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

const User = mongoose.model('User', userSchema)
module.exports = User
