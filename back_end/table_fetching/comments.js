import pool from "../database.js";

class Comments {
  static async getComments() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.comments");
    console.log(rows);
    return rows;
  }
  static async getComment(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.comments WHERE id = ?", [id]);
    return rows[0];
  }
  static async createComment(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.comments (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getComment(id);
  }
}
export default Comments;