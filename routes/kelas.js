const express = require("express");
const {
  selectAllKelas,
  selectKelasById,
  saveKelas,
  updateKelas,
  deleteKelas,
} = require("../controllers/kelas");
const { validationKelas } = require("../validation");
const ruoter = express.Router();

ruoter.get("/", selectAllKelas);
ruoter.get("/:id", selectKelasById);
ruoter.post("/", validationKelas, saveKelas);
ruoter.patch("/:id", validationKelas, updateKelas);
ruoter.delete("/:id", deleteKelas);

module.exports = ruoter;
