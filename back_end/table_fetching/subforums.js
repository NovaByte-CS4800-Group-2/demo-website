import pool from "../database.js";  

class Subforums {
  static async getSubforums() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.subforums");
    console.log(rows);
    return rows;
  }
  static async getSubforum(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.subforums WHERE id = ?", [id]);
    return rows[0];
  }
  static async createSubforum(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.subforums (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getSubforum(id);
  }
}
export default Subforums;