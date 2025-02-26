import pool from "../database.js";

class matching_request_forms {
  static async getMatching() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.matching_request_forms");
    console.log(rows);
    return rows;
  }
  static async getMatch(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.matching_request_forms WHERE id = ?", [id]);
    return rows[0];
  }
  static async createMatch(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.matching_request_forms (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getMatch(id);
  }
}

export default matching_request_forms;