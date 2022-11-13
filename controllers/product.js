const { response } = require("express");
const { pool } = require("../connect");
const allProducts = (req, res = response) => {
  let { name } = req.query;
  try {
    if (name) {
      const q = `SELECT * FROM product WHERE name LIKE "%${name}%";`;
      pool.query(q, (err, data) => {
        const newData = data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            url_image: e.url_image
              ? e.url_image
              : "https://media-exp1.licdn.com/dms/image/C4E0BAQEScQ7e7pBiqQ/company-logo_200_200/0/1626738605064?e=2147483647&v=beta&t=slWv_sNbmpIuJ74MsY59lJV55G-Um5l-R-BUaCUgbl4",
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
        const newData = data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            url_image: e.url_image
              ? e.url_image
              : "https://media-exp1.licdn.com/dms/image/C4E0BAQEScQ7e7pBiqQ/company-logo_200_200/0/1626738605064?e=2147483647&v=beta&t=slWv_sNbmpIuJ74MsY59lJV55G-Um5l-R-BUaCUgbl4",
            price: e.price,
            discount: e.discount,
            category: e.category,
          };
        });
        if (err) return res.status(500).json(err);
        return res.status(200).json(newData);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const joinsCategory = (req, res) => {
  try {
    const q = `SELECT DISTINCT product.id,product.name,product.url_image,product.price,product.discount,product.category FROM product RIGHT JOIN category ON product.category=${req.params.id}`;
    pool.query(q, (err, data) => {
      const newData = data.map((e) => {
        return {
          id: e.id,
          name: e.name,
          url_image: e.url_image
            ? e.url_image
            : "https://media-exp1.licdn.com/dms/image/C4E0BAQEScQ7e7pBiqQ/company-logo_200_200/0/1626738605064?e=2147483647&v=beta&t=slWv_sNbmpIuJ74MsY59lJV55G-Um5l-R-BUaCUgbl4",
          price: e.price,
          discount: e.discount,
          category: e.category,
        };
      });
      if (err) return res.status(500).json(err);
      return res.status(200).json(newData);
    });
  } catch (error) {
    console.log(error);
  }
};

const orderAsc = (req, res) => {
  try {
    const q = "SELECT * FROM product ORDER BY name ASC;";
    pool.query(q, (err, data) => {
      const newData = data.map((e) => {
        return {
          id: e.id,
          name: e.name,
          url_image: e.url_image
            ? e.url_image
            : "https://media-exp1.licdn.com/dms/image/C4E0BAQEScQ7e7pBiqQ/company-logo_200_200/0/1626738605064?e=2147483647&v=beta&t=slWv_sNbmpIuJ74MsY59lJV55G-Um5l-R-BUaCUgbl4",
          price: e.price,
          discount: e.discount,
          category: e.category,
        };
      });
      if (err) return res.status(500).json(err);
      return res.status(200).json(newData);
    });
  } catch (error) {
    console.log(error);
  }
};

const orderDesc = (req, res) => {
  try {
    const q = "SELECT * FROM product ORDER BY name DESC;";
    pool.query(q, (err, data) => {
      const newData = data.map((e) => {
        return {
          id: e.id,
          name: e.name,
          url_image: e.url_image
            ? e.url_image
            : "https://media-exp1.licdn.com/dms/image/C4E0BAQEScQ7e7pBiqQ/company-logo_200_200/0/1626738605064?e=2147483647&v=beta&t=slWv_sNbmpIuJ74MsY59lJV55G-Um5l-R-BUaCUgbl4",
          price: e.price,
          discount: e.discount,
          category: e.category,
        };
      });
      if (err) return res.status(500).json(err);
      return res.status(200).json(newData);
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  allProducts,
  joinsCategory,
  orderAsc,
  orderDesc,
};
