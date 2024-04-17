import { product } from "./schemaTypes/product";
import { camiseta } from "./schemaTypes/camiseta";
import { sudadera } from "./schemaTypes/sudadera";
import { category } from "./schemaTypes/category";
import { Accesorios } from "./schemaTypes/accesorios";

export const schema = {
  types: [product, camiseta, sudadera, category, Accesorios],
};
