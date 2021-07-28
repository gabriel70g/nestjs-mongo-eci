import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name) private productModel :Model<ProductDocument>
  ) {}

  create(createProductDto: CreateProductDto) {
    const createProduct = new this.productModel(createProductDto)
    
    return createProduct.save();
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: string) {
    const prod = this.productModel.findOne({ _id: id });
    if (!prod) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return prod;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const prodUpd = this.productModel.updateOne({ _id: id }, updateProductDto);
    if (!prodUpd) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return prodUpd;
  }

  remove(id: string) {
    return this.productModel.deleteOne({ _id: id });
  }
}
