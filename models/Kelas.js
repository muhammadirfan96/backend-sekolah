const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const Kelas = db.define(
  "kelas",
  {
    nama_kelas: DataTypes.STRING,
    wali_kelas: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Kelas;

// (async () => {
//   await db.sync();
// })();
