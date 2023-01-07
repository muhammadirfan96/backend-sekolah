const express = require("express");
const db = require("./config/Database");
const app = express();
const cors = require("cors");

(async () => {
  try {
    await db.authenticate();
    console.log("terkonensi ke database ...");
  } catch (error) {
    console.log("gagal koneksi ke database !!!");
  }
})();

app.use(express.json());
app.use(cors());

app.use("/siswa", require("./routes/siswa"));
app.use("/matpel", require("./routes/matpel"));
app.use("/kelas", require("./routes/kelas"));
app.use("/kelas_siswa", require("./routes/kelas_siswa"));
app.use("/absensi", require("./routes/absensi"));

app.listen("5000", () => {
  console.log("server running on port 5000 ...");
});
