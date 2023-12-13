const { Router } = require("express");
const router = Router();

const { getUser, getUsers, attendenceRecord, addAttendance, allAttendance } = require("../controllers/index");

router.get("/usuarios", getUsers)
router.get("/usuario/:id", getUser)
router.get("/usuario/:id/registro", attendenceRecord)
router.get("/usuarios/registro", allAttendance)
router.post("/usuario/", addAttendance)


module.exports = router;
