const express = require("express");
const {
  selectAllKelas_siswa,
  selectKelas_siswaById,
  saveKelas_siswa,
  updateKelas_siswa,
  deleteKelas_siswa,
} = require("../controllers/kelas_siswa");
const { validationKelas_siswa } = require("../validation");
const router = express.Router();

router.get("/", selectAllKelas_siswa);
router.get("/:id", selectKelas_siswaById);
router.post("/", validationKelas_siswa, saveKelas_siswa);
router.patch("/:id", validationKelas_siswa, updateKelas_siswa);
router.delete("/:id", deleteKelas_siswa);

module.exports = router;
