const mysql = require('mysql2');

const conn = mysql.createPool(
    {
        host: 'localhost',
        user:'root',
        password:'1234',
        database:'funko_test',
        WaitForConnections: true,
        connectionLimit : 10,
        idleTimeout : 50000,
        queueLimit : 0
    });

    pool.getConnection((error, connection) => {
        if (error){
            console.error('Hubo un error de conexión: ', error);
            } else{
                const pepe = connection.query('SHOW CONNECTION');
                console.log('Connexión a la base de datos exitosa. ');
                return;
                }
    });

    const getItems = async (params) => {
        const items = await pepe.getItems();
    }

    module.exports = {
        conn: pool.promise(
            () => new Promise((resolve) =>{
                resolve();
                console.log("connected");
                })
                )
            };