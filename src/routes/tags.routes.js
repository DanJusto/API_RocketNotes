const { Router } = require("express");

const TagsController = require("../controllers/tagsControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsControllers = new TagsController();

const tagsRouter = Router();

tagsRouter.get("/", ensureAuthenticated, tagsControllers.index);

module.exports = tagsRouter;