import { Injectable } from '@nestjs/common';
import { CreateObjectInput } from './dto/create-object.input';
import { UpdateObjectInput } from './dto/update-object.input';

@Injectable()
export class ObjectsService {
  create(createObjectInput: CreateObjectInput) {
    return 'This action adds a new object';
  }

  findAll() {
    return `This action returns all objects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} object`;
  }

  update(id: number, updateObjectInput: UpdateObjectInput) {
    return `This action updates a #${id} object`;
  }

  remove(id: number) {
    return `This action removes a #${id} object`;
  }
}
