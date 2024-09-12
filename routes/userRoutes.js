const express = require("express");
const userController = require("../controllers/userController");
//const authMiddleware = require("../middleware/authMiddleware");
//const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// Best practice
/*
router.post(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  userController.createUser
);
router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getAllUsers
);
router.get("/users/:id", authMiddleware, userController.getUserById);
router.put("/users/:id", authMiddleware, userController.updateUser);
router.delete(
  "/users/:id",
  authMiddleware,
  roleMiddleware("admin"),
  userController.deleteUser
);
*/
module.exports = router;
