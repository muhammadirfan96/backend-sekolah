const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const Absensi = db.define(
  "absensi",
  {
    id_kelas: DataTypes.INTEGER,
    id_matpel: DataTypes.INTEGER,
    waktu: DataTypes.DATE,
    sakit: DataTypes.STRING,
    izin: DataTypes.STRING,
    alpa: DataTypes.STRING,
    ket: DataTypes.TEXT,
    created_by: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Absensi;

// (async () => {
//   await db.sync();
// })();
