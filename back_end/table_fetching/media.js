import pool from "../database.js";

class Media {
  static async getMedia() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.media");
    console.log(rows);
    return rows;
  }
  static async getMedium(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.media WHERE id = ?", [id]);
    return rows[0];
  }
  static async createMedium(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.media (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getMedium(id);
  }
}
export default Media;