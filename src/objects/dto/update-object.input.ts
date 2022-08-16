import { CreateObjectInput } from './create-object.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateObjectInput extends PartialType(CreateObjectInput) {
  @Field(() => Int)
  id: number;
}
