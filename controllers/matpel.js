const Matpel = require("../models/Matpel");
const { validationResult } = require("express-validator");

exports.selectAllMatpel = async (req, res) => {
  try {
    const data = await Matpel.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.selectMatpelById = async (req, res) => {
  try {
    const data = await Matpel.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.saveMatpel = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { mata_pelajaran, guru_pengampu, periode } = req.body;
  const dataBaru = { mata_pelajaran, guru_pengampu, periode };
  try {
    const data = await Matpel.create(dataBaru);
    res.status(201).json({ saved: data });
  } catch (error) {
    console.error();
  }
};

exports.updateMatpel = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { mata_pelajaran, guru_pengampu, periode } = req.body;
  const dataBaru = { mata_pelajaran, guru_pengampu, periode };

  try {
    const dataLama = await Matpel.findByPk(req.params.id);
    if (!dataLama) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Matpel.update(dataBaru, { where: { id: req.params.id } });
    res.status(200).json({ updated: dataBaru, dataLama });
  } catch (error) {
    console.error();
  }
};

exports.deleteMatpel = async (req, res) => {
  try {
    const data = await Matpel.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Matpel.destroy({ where: { id: req.params.id } });
    res.status(200).json({ deleted: data });
  } catch (error) {
    console.error();
  }
};
