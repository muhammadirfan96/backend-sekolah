const express = require("express");
const {
  selectAllSiswa,
  selectSiswaById,
  saveSiswa,
  updateSiswa,
  deleteSiswa,
} = require("../controllers/siswa");
const { validationSiswa } = require("../validation");
const router = express.Router();

router.get("/", selectAllSiswa);
router.get("/:id", selectSiswaById);
router.post("/", validationSiswa, saveSiswa);
router.patch("/:id", validationSiswa, updateSiswa);
router.delete("/:id", deleteSiswa);

module.exports = router;
