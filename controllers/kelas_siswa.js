const Kelas_siswa = require("../models/Kelas_siswa");
const { validationResult } = require("express-validator");

exports.selectAllKelas_siswa = async (req, res) => {
  try {
    const data = await Kelas_siswa.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.selectKelas_siswaById = async (req, res) => {
  try {
    const data = await Kelas_siswa.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.saveKelas_siswa = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id_siswa, id_kelas } = req.body;
  const dataBaru = { id_siswa, id_kelas };
  try {
    const data = await Kelas_siswa.create(dataBaru);
    res.status(201).json({ saved: data });
  } catch (error) {
    console.error();
  }
};

exports.updateKelas_siswa = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id_siswa, id_kelas } = req.body;
  const dataBaru = { id_siswa, id_kelas };
  try {
    const dataLama = await Kelas_siswa.findByPk(req.params.id);
    if (!dataLama) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Kelas_siswa.update(dataBaru, { where: { id: req.params.id } });
    res.status(200).json({ updated: dataBaru, dataLama });
  } catch (error) {
    console.error();
  }
};

exports.deleteKelas_siswa = async (req, res) => {
  try {
    const data = await Kelas_siswa.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Kelas_siswa.destroy({ where: { id: req.params.id } });
    res.status(200).json({ deleted: data });
  } catch (error) {
    console.error();
  }
};
