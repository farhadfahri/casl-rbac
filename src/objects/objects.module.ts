import { Module } from '@nestjs/common';
import { ObjectsService } from './objects.service';
import { ObjectsResolver } from './objects.resolver';

@Module({
  providers: [ObjectsResolver, ObjectsService]
})
export class ObjectsModule {}
