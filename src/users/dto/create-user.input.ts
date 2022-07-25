import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'The users email (unique)' })
  email: string;

  @Field({ description: 'The users name', nullable: true })
  name?: string;
}
