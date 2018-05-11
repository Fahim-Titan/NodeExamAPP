const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FullName: {
        type : String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String
    },
    Contact: {
        type: String
    },
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Roles: {
        type: [String],
        required: true,
        // enum: ['admin', 'tester', 'student'],
        lowercase: true
    },
    CourseTaken: [
        {
            CourseID: String,
            CourseName: String,
            StartDate: { type: Date, default: Date.now },
            ClassAttended: [
                {
                    ClassCode: String,
                    ClassTopic: String,
                    DateOfClass: Date,
                    ExamAttended: [
                        {
                            ExamCode: String,
                            Points: Number,
                            TotalMarks: Number
                        }
                    ]
                }
            ]
        }
    ]
});
const User = mongoose.model('user', userSchema);


function validateUser(user){
    const schema ={
        FullName: Joi.string().min(5).max(50).required(),
        Email: Joi.string().email().required(),
        UserName: Joi.string().required(),
        Password: Joi.string().required(),
        Roles: Joi.array(),
        CourseTaken: Joi.array(),
        Contact: Joi.string(),
        Address: Joi.string()
    }
    return Joi.validate(user, schema);
}


module.exports.validate = validateUser;
module.exports.User  = User;