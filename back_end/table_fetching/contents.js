import pool from "../database.js";  

class Contents {
  static async getContents() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.content");
    console.log(rows);
    return rows;
  }
  static async getContent(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.content WHERE id = ?", [id]);
    return rows[0];
  }
  static async createContent(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.content (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getContent(id);
  }
}
export default Contents;