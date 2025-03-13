import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductoModule, MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
