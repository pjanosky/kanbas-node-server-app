import * as dao from "./dao.js";

function ModuleRoutes(app) {
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourseId(cid);
    res.json(modules);
  });
  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const module = {
      ...req.body,
      course: cid,
    };
    const newModule = await dao.createModule(module);
    res.json(newModule);
  });
  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const status = await dao.deleteModule(mid);
    res.json(status);
  });
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    const updatedModule = await dao.findModuleById(mid);
    res.json(updatedModule);
  });
}
export default ModuleRoutes;
