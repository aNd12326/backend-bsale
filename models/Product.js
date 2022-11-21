const pool = require("../utils/db.js");

module.exports = {
  getAllProducts(query, callback) {
    pool.query(query, function (err, data) {
      callback(err, data);
    });
  },
  getProductByCategory(query, callback) {
    pool.query(query, function (err, data) {
      callback(err, data);
    });
  },
  orderProductAsc(query, callback) {
    pool.query(query, function (err, data) {
      callback(err, data);
    });
  },
  orderProductDesc(query, callback) {
    pool.query(query, function (err, data) {
      callback(err, data);
    });
  },
};
