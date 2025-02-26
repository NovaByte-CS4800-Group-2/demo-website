import pool from "../database.js";

class Users {
  static async getProfiles() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.users");
    console.log(rows);
    return rows;
  }
  static async getProfile(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.users WHERE id = ?", [id]);
    return rows[0];
  }
  static async createProfile(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.users (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getNote(id);
  }
}
export default Users;