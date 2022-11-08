const { response } = require("express");
const { pool } = require("../connect");
const allProducts = (req, res = response) => {
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
};

module.exports = {
  allProducts,
};
