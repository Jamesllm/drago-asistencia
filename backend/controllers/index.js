const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT * FROM usuarios WHERE dni = $1", [id]);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const attendenceRecord = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM r_asistencia WHERE dni = $1 ORDER BY id DESC",
      [id]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener registro de asistencia:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const allAttendance = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM r_asistencia");

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al obtener registro de asistencia:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const addAttendance = async (req, res) => {
  const { date, dni, hora } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO r_asistencia(dni, fecha, hora) VALUES ($1, $2, $3)",
      [dni, date, hora]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error al añadir asistencia:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getUser,
  getUsers,
  addAttendance,
  attendenceRecord,
  allAttendance,
};
