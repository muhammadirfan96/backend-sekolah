const Kelas = require("../models/Kelas");
const { validationResult } = require("express-validator");

exports.selectAllKelas = async (req, res) => {
  try {
    const data = await Kelas.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.selectKelasById = async (req, res) => {
  try {
    const data = await Kelas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.saveKelas = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { nama_kelas, wali_kelas } = req.body;
  const dataBaru = { nama_kelas, wali_kelas };
  try {
    const data = Kelas.create(dataBaru);
    res.status(201).json({ saved: data });
  } catch (error) {
    console.error();
  }
};

exports.updateKelas = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { nama_kelas, wali_kelas } = req.body;
  const dataBaru = { nama_kelas, wali_kelas };
  try {
    const dataLama = await Kelas.findByPk(req.params.id);
    if (!dataLama) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Kelas.update(dataBaru, { where: { id: req.params.id } });
    res.status(200).json({ updated: dataBaru, dataLama });
  } catch (error) {
    console.error();
  }
};

exports.deleteKelas = async (req, res) => {
  try {
    const data = await Kelas.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Kelas.destroy({ where: { id: req.params.id } });
    res.status(200).json({ deleted: data });
  } catch (error) {
    console.error();
  }
};
