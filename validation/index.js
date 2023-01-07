const { body } = require("express-validator");

exports.validationSiswa = [
  body("nama").notEmpty().withMessage("nama harus diisi").trim().escape(),
  body("nis").notEmpty().withMessage("nis harus diisi").trim().escape(),
  body("ttl").notEmpty().withMessage("ttl harus diisi").trim().escape(),
  body("alamat").notEmpty().withMessage("alamat harus diisi").trim().escape(),
  body("wali").notEmpty().withMessage("wali harus diisi").trim().escape(),
];

exports.validationMatpel = [
  body("mata_pelajaran")
    .notEmpty()
    .withMessage("mata pelajaran harus diisi")
    .trim()
    .escape(),
  body("guru pengampu")
    .notEmpty()
    .withMessage("guru pengampu harus diisi")
    .trim()
    .escape(),
  body("periode").notEmpty().withMessage("periode harus diisi").trim().escape(),
];

exports.validationKelas = [
  body("nama_kelas")
    .notEmpty()
    .withMessage("nama kelas harus diisi")
    .trim()
    .escape(),
  body("wali_kelas")
    .notEmpty()
    .withMessage("wali kelas harus diisi")
    .trim()
    .escape(),
];

exports.validationKelas_siswa = [
  body("id_siswa")
    .isNumeric()
    .withMessage("data harus numerik")
    .trim()
    .escape(),
  body("id_kelas")
    .isNumeric()
    .withMessage("data harus numerik")
    .trim()
    .escape(),
];

exports.validationAbsensi = [
  body("id_kelas")
    .isNumeric()
    .withMessage("data harus numerik")
    .trim()
    .escape(),
  body("id_matpel")
    .isNumeric()
    .withMessage("data harus numerik")
    .trim()
    .escape(),
  body("waktu").notEmpty().withMessage("waktu harus diisi"),
  body("ket").trim().escape(),
  body("created_by")
    .notEmpty()
    .withMessage("created by harus diisi")
    .trim()
    .escape(),
];
