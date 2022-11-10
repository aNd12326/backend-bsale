const { response } = require("express");
const { pool } = require("../connect");
const allProducts = (req, res = response) => {
  let { name } = req.query;
  try {
    if (name) {
      // const q = `SELECT * FROM product WHERE name=${name};`;
      const q = `SELECT * FROM product WHERE name LIKE "%${name}%";`;
      pool.query(q, (err, data) => {
        const newData = data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            url_image: e.url_image
              ? e.url_image
              : "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
            price: e.price,
            discount: e.discount,
            category: e.category,
          };
        });
        if (err) return res.status(500).json(err);
        return res.status(200).json(newData);
      });
    } else {
      const q = "SELECT * FROM product;";
      pool.query(q, (err, data) => {
        // console.log(data.map((e) => e.name));
        const newData = data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            url_image: e.url_image
              ? e.url_image
              : "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
            price: e.price,
            discount: e.discount,
            category: e.category,
          };
        });
        // console.log(newData);
        if (err) return res.status(500).json(err);
        return res.status(200).json(newData);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const joinsCategory = (req, res) => {
  const q = `SELECT DISTINCT product.id,product.name,product.url_image,product.price,product.discount,product.category FROM product RIGHT JOIN category ON product.category=${req.params.id}`;
  pool.query(q, (err, data) => {
    const newData = data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        url_image: e.url_image
          ? e.url_image
          : "https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png",
        price: e.price,
        discount: e.discount,
        category: e.category,
      };
    });
    if (err) return res.status(500).json(err);
    return res.status(200).json(newData);
  });
  const { id } = req.params;
  console.log(id);
};

module.exports = {
  allProducts,
  joinsCategory,
};
