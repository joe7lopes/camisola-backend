const { ProductModel } = require('../../db/models');
import { IProduct } from '../../types';
export const getAll = () => ProductModel.find();

const create = (product: IProduct) => ProductModel.create(product);