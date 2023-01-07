const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const Siswa = db.define(
  "siswa",
  {
    nama: DataTypes.STRING,
    nis: DataTypes.STRING,
    ttl: DataTypes.STRING,
    alamat: DataTypes.STRING,
    wali: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Siswa;

// (async () => {
//   await db.sync();
// })();
