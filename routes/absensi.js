const express = require("express");
const {
  selectAllAbsensi,
  selectAbsensiById,
  saveAbsensi,
  updateAbsensi,
  deleteAbsensi,
} = require("../controllers/Absensi");
const { validationAbsensi } = require("../validation");
const router = express.Router();

router.get("/", selectAllAbsensi);
router.get("/:id", selectAbsensiById);
router.post("/", validationAbsensi, saveAbsensi);
router.patch("/:id", validationAbsensi, updateAbsensi);
router.delete("/:id", deleteAbsensi);

module.exports = router;
