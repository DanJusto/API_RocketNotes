const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/usersControllers");
const UserAvatarController = require("../controllers/userAvatarControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersControllers = new UsersController();
const userAvatarControllers = new UserAvatarController();
const upload = multer(uploadConfig.MULTER);
const usersRoutes = Router();

usersRoutes.post("/", usersControllers.create);
usersRoutes.put("/", ensureAuthenticated, usersControllers.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarControllers.update);

module.exports = usersRoutes;