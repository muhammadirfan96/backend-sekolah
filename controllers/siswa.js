const Siswa = require("../models/Siswa");
const { validationResult } = require("express-validator");

exports.selectAllSiswa = async (req, res) => {
  try {
    const data = await Siswa.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.selectSiswaById = async (req, res) => {
  try {
    const data = await Siswa.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.saveSiswa = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { nama, nis, ttl, alamat, wali } = req.body;
  const dataBaru = { nama, nis, ttl, alamat, wali };
  try {
    const data = await Siswa.create(dataBaru);
    res.status(201).json({ saved: data });
  } catch (error) {
    console.error();
  }
};

exports.updateSiswa = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { nama, nis, ttl, alamat, wali } = req.body;
  const dataBaru = { nama, nis, ttl, alamat, wali };
  try {
    const dataLama = await Siswa.findByPk(req.params.id);
    if (!dataLama) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Siswa.update(dataBaru, { where: { id: req.params.id } });
    res.status(200).json({ updated: dataBaru, dataLama });
  } catch (error) {
    console.error();
  }
};

exports.deleteSiswa = async (req, res) => {
  try {
    const data = await Siswa.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Siswa.destroy({ where: { id: req.params.id } });
    res.status(200).json({ deleted: data });
  } catch (error) {
    console.log(error);
  }
};
