import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  });
  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  });
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  });
  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    await dao.updateCourse(id, req.body);
    const course = await dao.findCourseById(id);
    res.json(course);
  });
  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(course);
  });
}
