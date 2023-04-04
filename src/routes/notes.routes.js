const { Router } = require("express");

const NotesController = require("../controllers/notesControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const notesControllers = new NotesController();

const notesRoutes = Router();

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.delete("/:id", notesControllers.delete);
notesRoutes.get("/", notesControllers.index);

module.exports = notesRoutes;