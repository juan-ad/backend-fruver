import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root' ,
    password: "",
    database: "fruver",
    port: "3306"
});

export const getProductos = async (req, res)=>{
    await pool.query("SELECT * FROM producto", (err, data) => {
        if (err){
            console.log(err);
            res.status(400).json({mensaje: err});
        }else{
            res.status(200).json(data);
        }
    });
}

export const postProductos = async (req, res)=>{
    const {nombre, detalle} = req.body;
    await pool.query(`INSERT INTO producto(nombre, detalle) VALUES('${nombre}', '${detalle}')`, (err, data) => {
        if (err){
            console.log(err);
            res.status(400).json({mensaje: err});
        }else{
            res.status(200).json({
                body: {
                    nombre, 
                    detalle       
                }
            });
        }
    });
}

export const putProductos = async(req, res)=>{
    const { idProducto } = req.params;
    const { nombre, detalle } = req.body;
    await pool.query(`UPDATE producto set nombre='${nombre}', detalle='${detalle}' WHERE id='${idProducto}'`, (err, data) => {
        if (err){
            console.log(err);
            res.status(400).json({mensaje: err});
        }else{
            res.status(200).json({
                body: {
                    nombre, 
                    detalle       
                }
            });
        }
    });
}

export const deleteProductos = async (req, res)=>{
    const { idProducto } = req.params;
    await pool.query(`DELETE FROM producto WHERE id = '${idProducto}'`, (err, data) => {
        if (err){
            console.log(err);
            res.status(400).json({mensaje: err});
        }else{
            res.status(200).json({mensaje: 'Registro eliminado satisfactoriamente'});
        }
    });
}