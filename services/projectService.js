const Project = require("../models/Project");

class ProjectService {
  // Créer un projet
  async createProject(projectData) {
    const project = new Project(projectData);
    return await project.save();
  }

  // Trouver un projet par son ID
  async getProjectById(id) {
    return await Project.findById(id).populate("owner");
  }

  // Mettre à jour un projet (incluant la personnalisation)
  async updateProject(id, projectData) {
    return await Project.findByIdAndUpdate(id, projectData, { new: true });
  }

  // Supprimer un projet
  async deleteProject(id) {
    return await Project.findByIdAndDelete(id);
  }

  // Récupérer tous les projets
  async getAllProjects() {
    return await Project.find().populate("owner");
  }
}

module.exports = new ProjectService();
