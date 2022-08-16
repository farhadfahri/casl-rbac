import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateObjectInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
