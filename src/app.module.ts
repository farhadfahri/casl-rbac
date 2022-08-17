import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [UsersModule, RolesModule, PermissionsModule, ResourcesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
