import pool from "../database.js";

class Votes {
  static async getVotes() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.votes");
    console.log(rows);
    return rows;
  }
  static async getVote(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.votes WHERE id = ?", [id]);
    return rows[0];
  }
  static async createVote(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.votes (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getVote(id);
  }
}

export default Votes;