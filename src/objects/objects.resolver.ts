import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ObjectsService } from './objects.service';
import { Object } from './entities/object.entity';
import { CreateObjectInput } from './dto/create-object.input';
import { UpdateObjectInput } from './dto/update-object.input';

@Resolver(() => Object)
export class ObjectsResolver {
  constructor(private readonly objectsService: ObjectsService) {}

  @Mutation(() => Object)
  createObject(@Args('createObjectInput') createObjectInput: CreateObjectInput) {
    return this.objectsService.create(createObjectInput);
  }

  @Query(() => [Object], { name: 'objects' })
  findAll() {
    return this.objectsService.findAll();
  }

  @Query(() => Object, { name: 'object' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.objectsService.findOne(id);
  }

  @Mutation(() => Object)
  updateObject(@Args('updateObjectInput') updateObjectInput: UpdateObjectInput) {
    return this.objectsService.update(updateObjectInput.id, updateObjectInput);
  }

  @Mutation(() => Object)
  removeObject(@Args('id', { type: () => Int }) id: number) {
    return this.objectsService.remove(id);
  }
}
