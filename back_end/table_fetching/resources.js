import pool from "../database.js";

class Resources {
  static async getResources() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.resources");
    console.log(rows);
    return rows;
  }

  static async getResource(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.resources WHERE id = ?", [id]);
    console.log(rows);
    return rows[0];
  }

  static async createResource(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.resources (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return this.getResource(id); // Use 'this' to call the method correctly
  }
}

export default Resources;
