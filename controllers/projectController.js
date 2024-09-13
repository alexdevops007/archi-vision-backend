const projectService = require("../services/projectService");
const errorHandler = require("../utils/errorHandler");
const { validateProject } = require("../utils/validators");

class ProjectController {
  // Créer un projet
  async createProject(req, res) {
    const validationErrors = validateProject(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    try {
      const newProject = await projectService.createProject(req.body);
      console.log(newProject);
      res.status(201).json(newProject);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Obtenir tous les projets
  async getAllProjects(req, res) {
    try {
      const projects = await projectService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Obtenir un projet par son ID
  async getProjectById(req, res) {
    try {
      const project = await projectService.getProjectById(req.params.id);
      if (!project) {
        return res.status(404).json({ message: "Projet non trouvé" });
      }
      res.status(200).json(project);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Mettre à jour un projet
  async updateProject(req, res) {
    const validationErrors = validateProject(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({ errors: validationErrors });
    }

    try {
      const updatedProject = await projectService.updateProject(
        req.params.id,
        req.body
      );
      if (!updatedProject) {
        return res.status(404).json({ message: "Projet non trouvé" });
      }
      res.status(200).json(updatedProject);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Supprimer un projet
  async deleteProject(req, res) {
    try {
      const deletedProject = await projectService.deleteProject(req.params.id);
      if (!deletedProject) {
        return res.status(404).json({ message: "Projet non trouvé" });
      }
      res.status(200).json({ message: "Projet supprimé avec succès" });
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

module.exports = new ProjectController();
