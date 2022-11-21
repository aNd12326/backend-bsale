const { response } = require("express");
const categoryModel = require("../models/Category");

const allCategories = (req, res = response) => {
  try {
    const sql = "SELECT * FROM category";
    categoryModel.getAllCategories(sql, (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { allCategories };
