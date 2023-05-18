import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      name: 'Green Angular Board 3000',
      description: 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
      price: 15000,
      quantityInStock: 100,
    },
    {
      name: 'Core Board Speed Rush 3',
      description:
        'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
      price: 18000,
      quantityInStock: 100,
    },
    {
      name: 'Net Core Super Board',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
      price: 30000,
      quantityInStock: 100,
    },
  ];

  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto)
    return `User number ${this.products.length} was created`;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.findProduct(id);
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    let product = this.findProduct(id);
    const {name , description, price, quantityInStock} = updateProductDto;
    if(name){
      product.name = name
    }
    if(description){
      product.description = description;
    }
    if(price){
      product.price = price;
    }
    if(quantityInStock){
      product.quantityInStock = quantityInStock
    }

    this.products[id] = product;
    return product;
  }

  remove(id: number) {
    this.products.splice(id, 1)
    return this.products;
  }

  private findProduct(id: number): Product{
    const product = this.products[id];
    if(!product){
      throw new Error("Product not found");
    }
    return product;
  }
}
