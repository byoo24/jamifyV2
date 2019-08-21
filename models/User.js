const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'student'
    },
    coach: {
        type: String,
        default: null
    },
    foundations: {
        resume: {
            type: Integer,
            default: 0
        },
        cover_letter: {
            type: Integer,
            default: 0
        },
        full_stack_project: {
            type: Integer,
            default: 0
        },
        javascript_project: {
            type: Integer,
            default: 0
        },
        personal_pitch: {
            type: Integer,
            default: 0
        },
        mock_interview: {
            type: Integer,
            default: 0
        },
        
        
    }
});
const User = mongoose.model('users', UserSchema);



module.exports = User;