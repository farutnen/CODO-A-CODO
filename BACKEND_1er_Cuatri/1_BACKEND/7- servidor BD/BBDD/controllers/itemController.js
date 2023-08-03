const {getAll, getOne} = require('../models/items');

const getAll = async () => {

    const [rows, fields] = await conn.query('SELECT * FROM product WHERE product_id = ?;', id);

    return rows;
};

getAll.