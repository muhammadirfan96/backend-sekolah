const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const Kelas_siswa = db.define(
  "kelas_siswa",
  {
    id_siswa: DataTypes.INTEGER,
    id_kelas: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Kelas_siswa;

// (async () => {
//   await db.sync();
// })();
