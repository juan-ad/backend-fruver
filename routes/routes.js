import Router from 'express';
import { getProductos, postProductos, putProductos, deleteProductos } from '../Controllers/controller.js';

export const routes = Router();

routes.get("/productos", getProductos);

routes.post("/productos", postProductos);

routes.put("/productos/:idProducto", putProductos);

routes.delete("/productos/:idProducto", deleteProductos);

