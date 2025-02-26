import pool from "../database.js";

class Posts {
  static async getPosts() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.posts");
    console.log(rows);
    return rows;
  }
  static async getPost(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.posts WHERE id = ?", [id]);
    return rows[0];
  }
  static async createPost(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.posts (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getPost(id);
  }
}
export default Posts;