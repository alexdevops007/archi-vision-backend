const User = require("../models/User");

class UserService {
  // Créer un utilisateur
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  // Trouver un utilisateur par email
  async findByEmail(email) {
    return await User.findOne({ email });
  }

  // Mettre à jour un utilisateur
  async updateUser(userId, userData) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

  // Supprimer un utilisateur
  async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }

  // Récupérer tous les utilisateurs
  async getAllUsers() {
    return await User.find();
  }

  // Récupérer un utilisateur par son ID
  async getUserById(userId) {
    return await User.findById(userId);
  }
}

module.exports = new UserService();
