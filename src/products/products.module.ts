import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { Product, ProductSchema } from './entities/product.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Product.name,
    schema: ProductSchema,
  }])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
