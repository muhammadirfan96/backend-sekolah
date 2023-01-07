const { DataTypes } = require("sequelize");
const db = require("../config/Database");

const Matpel = db.define(
  "matpel",
  {
    mata_pelajaran: DataTypes.STRING,
    guru_pengampu: DataTypes.STRING,
    periode: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Matpel;

// (async () => {
//   await db.sync();
// })();
