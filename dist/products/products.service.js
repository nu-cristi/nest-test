"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            {
                name: 'Green Angular Board 3000',
                description: 'Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.',
                price: 15000,
                quantityInStock: 100,
            },
            {
                name: 'Core Board Speed Rush 3',
                description: 'Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.',
                price: 18000,
                quantityInStock: 100,
            },
            {
                name: 'Net Core Super Board',
                description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
                price: 30000,
                quantityInStock: 100,
            },
        ];
    }
    create(createProductDto) {
        this.products.push(createProductDto);
        return `User number ${this.products.length} was created`;
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.findProduct(id);
        return product;
    }
    update(id, updateProductDto) {
        let product = this.findProduct(id);
        const { name, description, price, quantityInStock } = updateProductDto;
        if (name) {
            product.name = name;
        }
        if (description) {
            product.description = description;
        }
        if (price) {
            product.price = price;
        }
        if (quantityInStock) {
            product.quantityInStock = quantityInStock;
        }
        this.products[id] = product;
        return product;
    }
    remove(id) {
        this.products.splice(id, 1);
        return this.products;
    }
    findProduct(id) {
        const product = this.products[id];
        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map