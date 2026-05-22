const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/patientController");

router.post("/", auth("admin"), controller.createPatient);
router.get("/", auth(), controller.getPatients);
router.get("/:id", auth(), controller.getPatient);
router.put("/:id", auth("admin"), controller.updatePatient);
router.delete("/:id", auth("admin"), controller.deletePatient);

module.exports = router;