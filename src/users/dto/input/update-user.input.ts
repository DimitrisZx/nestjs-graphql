import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  age: number;
}
