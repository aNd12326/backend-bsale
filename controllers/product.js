const { response } = require("express");
const productModel = require("../models/Product");

const imgRandom =
  "https://media-exp1.licdn.com/dms/image/C4E0BAQEScQ7e7pBiqQ/company-logo_200_200/0/1626738605064?e=2147483647&v=beta&t=slWv_sNbmpIuJ74MsY59lJV55G-Um5l-R-BUaCUgbl4";

const allProducts = (req, res = response) => {
  let { name } = req.query;
  if (name) {
    const sql = `SELECT * FROM product WHERE name LIKE "%${name}%";`;
    productModel.getAllProducts(sql, (err, result) => {
      const newData = result.map((e) => {
        return {
          id: e.id,
          name: e.name,
          url_image: e.url_image ? e.url_image : imgRandom,
          price: e.price,
          discount: e.discount,
          category: e.category,
        };
      });
      if (err) throw err;
      res.status(200).json(newData);
    });
  } else {
    const sql = "SELECT * FROM product;";
    productModel.getAllProducts(sql, (err, result) => {
      const newData = result.map((e) => {
        return {
          id: e.id,
          name: e.name,
          url_image: e.url_image ? e.url_image : imgRandom,
          price: e.price,
          discount: e.discount,
          category: e.category,
        };
      });
      if (err) throw err;
      res.status(200).json(newData);
    });
  }
};

const joinByCategory = (req, res) => {
  const sql = `SELECT DISTINCT product.id,product.name,product.url_image,product.price,product.discount,product.category FROM product RIGHT JOIN category ON product.category=${req.params.id}`;
  productModel.getProductByCategory(sql, (err, result) => {
    const newData = result.map((e) => {
      return {
        id: e.id,
        name: e.name,
        url_image: e.url_image ? e.url_image : imgRandom,
        price: e.price,
        discount: e.discount,
        category: e.category,
      };
    });
    if (err) return res.status(500).json(err);
    return res.status(200).json(newData);
  });
};

const orderAsc = (req, res) => {
  const sql = "SELECT * FROM product ORDER BY name ASC;";
  productModel.orderProductAsc(sql, (err, result) => {
    const newData = result.map((e) => {
      return {
        id: e.id,
        name: e.name,
        url_image: e.url_image ? e.url_image : imgRandom,
        price: e.price,
        discount: e.discount,
        category: e.category,
      };
    });
    if (err) return res.status(500).json(err);
    return res.status(200).json(newData);
  });
};

const orderDesc = (req, res) => {
  const sql = "SELECT * FROM product ORDER BY name DESC;";
  productModel.orderProductDesc(sql, (err, result) => {
    const newData = result.map((e) => {
      return {
        id: e.id,
        name: e.name,
        url_image: e.url_image ? e.url_image : imgRandom,
        price: e.price,
        discount: e.discount,
        category: e.category,
      };
    });
    if (err) return res.status(500).json(err);
    return res.status(200).json(newData);
  });
};

module.exports = { allProducts, joinByCategory, orderAsc, orderDesc };
