const { validationResult } = require("express-validator");
const Absensi = require("../models/Absensi");

exports.selectAllAbsensi = async (req, res) => {
  try {
    const data = await Absensi.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.selectAbsensiById = async (req, res) => {
  try {
    const data = await Absensi.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    res.status(200).json(data);
  } catch (error) {
    console.error();
  }
};

exports.saveAbsensi = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { id_kelas, id_matpel, waktu, sakit, izin, alpa, ket } = req.body;
  const dataBaru = { id_kelas, id_matpel, waktu, sakit, izin, alpa, ket };
  try {
    const data = await Absensi.create(dataBaru);
    res.status(201).json({ saved: data });
  } catch (error) {
    console.error();
  }
};

exports.updateAbsensi = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ errors: errors.array() });
  }
  const { id_kelas, id_matpel, waktu, sakit, izin, alpa, ket } = req.body;
  const dataBaru = { id_kelas, id_matpel, waktu, sakit, izin, alpa, ket };
  try {
    const dataLama = Absensi.findByPk(req.params.id);
    if (!dataLama) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Absensi.update(dataBaru, { where: { id: req.params.id } });
    res.status(200).json({ updated: dataBaru, dataLama });
  } catch (error) {
    console.error();
  }
};

exports.deleteAbsensi = async (req, res) => {
  try {
    const data = await Absensi.findByPk(req.params.id);
    if (!data) return res.status(404).json({ msg: "data tdk ditemukan" });
    await Absensi.destroy({ where: { id: req.params.id } });
    res.status(200).json({ deleted: data });
  } catch (error) {
    console.error();
  }
};
