const userService = require("../services/userService");
const errorHandler = require("../utils/errorHandler");

class UserController {
  // Créer un utilisateur
  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Obtenir tous les utilisateurs
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Obtenir un utilisateur par son ID
  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json(user);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Modifier un utilisateur
  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Supprimer un utilisateur
  async deleteUser(req, res) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

module.exports = new UserController();
