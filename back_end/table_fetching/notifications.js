import pool from "../database.js";

class Notifications {
  static async getNotifications() {
    const [rows] = await pool.query("SELECT * FROM pyroDB.notifications");
    console.log(rows);
    return rows;
  }
  static async getNotification(id) {
    const [rows] = await pool.query("SELECT * FROM pyroDB.notifications WHERE id = ?", [id]);
    return rows[0];
  }
  static async createNotification(title, content) {
    const [result] = await pool.query("INSERT INTO pyroDB.notifications (title, contents) VALUES (?, ?)", [title, content]);
    const id = result.insertId;
    return getNotification(id);
  }
}
export default Notifications;