const express = require("express");
const {
  selectAllMatpel,
  selectMatpelById,
  saveMatpel,
  updateMatpel,
  deleteMatpel,
} = require("../controllers/matpel");
const { validationMatpel } = require("../validation");
const router = express.Router();

router.get("/", selectAllMatpel);
router.get("/:id", selectMatpelById);
router.post("/", validationMatpel, saveMatpel);
router.patch("/:id", validationMatpel, updateMatpel);
router.delete("/:id", deleteMatpel);

module.exports = router;
