import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController} from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
