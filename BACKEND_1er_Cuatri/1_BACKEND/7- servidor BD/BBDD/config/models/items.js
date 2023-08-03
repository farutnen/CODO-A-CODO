const { conn } = require('../config/conn');

const getAll = async() => {

    const [rows, fields] = await conn.query('SELECT * FROM product;');
    
    return rows;
    };


    module.exports={
        getAll:getAll,

    };