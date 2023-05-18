import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): string;
    findAll(): Product[];
    findOne(id: string): Product;
    update(id: string, updateProductDto: UpdateProductDto): Product;
    remove(id: string): Product[];
}
