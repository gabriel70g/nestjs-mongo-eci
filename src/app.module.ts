import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import { DatabaseModule } from './database/database.module';
import config from './config';
import * as joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal:true,
      validationSchema: joi.object({
        PORT: joi.number().required(),
        MONGO_PORT: joi.number().required(),
        MONGO_DB: joi.string().required(),
        MONGO_INITDB_ROOT_USERNAME: joi.string().required(),
        MONGO_INITDB_ROOT_PASSWORD: joi.string().required(),
        MONGO_HOST: joi.string().required(),
        MONGO_CONNECTION: joi.string().required(),
        APIKEY: joi.string().required(),
      })
    }),
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
