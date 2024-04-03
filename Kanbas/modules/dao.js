import model from "./model.js";

export const findModuleById = (moduleId) => model.findById(moduleId);
export const findModulesByCourseId = (courseId) =>
  model.find({ course: courseId });
export const createModule = (module) => {
  delete module._id;
  return model.create(module);
};
export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
