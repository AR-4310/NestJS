import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type : `postgres`,
    port : 5432,
    host : `localhost`,
    username : `postgres`,
    password : `jahabun4310`,
    database : `Keyponno`,
    autoLoadEntities : true,
    synchronize : true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
