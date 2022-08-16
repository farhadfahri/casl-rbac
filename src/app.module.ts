import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ObjectsModule } from './objects/objects.module';

@Module({
  imports: [UsersModule, RolesModule, PermissionsModule, ObjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
