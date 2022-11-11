const { response } = require("express");
const { pool } = require("../connect");

const allCategories = (req, res = response) => {
  try {
    const q = "SELECT * FROM category";
    pool.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { allCategories };
