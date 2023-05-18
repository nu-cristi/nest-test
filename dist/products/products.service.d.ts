import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private products;
    create(createProductDto: CreateProductDto): string;
    findAll(): Product[];
    findOne(id: number): Product;
    update(id: number, updateProductDto: UpdateProductDto): Product;
    remove(id: number): Product[];
    private findProduct;
}
