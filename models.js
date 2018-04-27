const mongoose = require('./db');

// module.exports = function () {
    // var ObjectID = mongoose.Types.ObjectId;

    var userSchema = new mongoose.Schema({
        // id: ObjectID,
        FullName: String,
        Email: String,
        Address: String,
        Contact: String,
        UserName: String,
        Password: String,
        Roles: [String],
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




    var models = {
        Users : mongoose.model('User', userSchema, "Users")
    };

    // return models;
module.exports = models.Users;