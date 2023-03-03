const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [ isEmail, 'invalid email address' ],
        },

    },
    {
        toJSON: {
          
        },
    }
);

const User = model('user', userSchema);

module.exports = User;
