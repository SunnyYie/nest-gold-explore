import { DynamicModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AppService } from 'src/app.service';

@Module({
  // controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  static forRoot(entities = [], options?): DynamicModule {
    return {
      module: UserModule,
      controllers: [UserController],
      providers: [UserService,AppService],
    };
  }
}
