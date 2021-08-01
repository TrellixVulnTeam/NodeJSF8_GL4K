const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class meController {
  // [GET]/me/stored/courses
  storedCourses(req, res, next) {
  

    Promise.all([
      Course.find({}).sortable(req),
      Course.countDocumentsDeleted()]
      )
      .then(([courses, deletedCount]) => {
        res.render("me/storedCourses", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET]/me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/trashCourses", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new meController();
