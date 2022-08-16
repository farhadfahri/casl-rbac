import { Test, TestingModule } from '@nestjs/testing';
import { ObjectsResolver } from './objects.resolver';
import { ObjectsService } from './objects.service';

describe('ObjectsResolver', () => {
  let resolver: ObjectsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectsResolver, ObjectsService],
    }).compile();

    resolver = module.get<ObjectsResolver>(ObjectsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
