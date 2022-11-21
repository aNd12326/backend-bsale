const pool = require("../utils/db.js");

module.exports = {
  getAllCategories(query, callback) {
    pool.query(query, (err, data) => callback(err, data));
  },
};
