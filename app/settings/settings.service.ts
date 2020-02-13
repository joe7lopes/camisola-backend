import { ProductModel } from '../db/models';
import { IProduct } from '../types';
export const getAll = () => ProductModel.find();

const createSizes = (product: IProduct) => ProductModel.create(product);