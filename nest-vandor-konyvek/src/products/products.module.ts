import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController} from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    AuthModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
