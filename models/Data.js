const db = require("../db/connect");
class Contact {
  constructor(name, email, contact) {
    (this.name = name), (this.email = email), (this.contact = contact);
  }
  create() {
    const createSql =
      "INSERT INTO contact_db (name, email, contact) VALUES (?, ?, ?)";
    const values = [this.name, this.email, this.contact];
    return db.execute(createSql, values);
  }
  static findAll() {
    let selectSql = `SELECT * FROM contact_db`;
    return db.execute(selectSql);
  }

  findById(id) {
    const createSql = "SELECT * FROM contact_db where id = ?";
    const values = [id];
    return db.execute(createSql, values);
  }

  deleteContact(id) {
    const createSql = "DELETE FROM contact_db where id = ?";
    const values = [id];
    return db.execute(createSql, values);
  }

  updateContact(id) {
    const createSql =
      "UPDATE contact_db SET name = ?, email = ?, contact = ? where id = ?";
    const values = [this.name, this.email, this.contact, id];
    return db.execute(createSql, values);
  }
}

module.exports = Contact;
