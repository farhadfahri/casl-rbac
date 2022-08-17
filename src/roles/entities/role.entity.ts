import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Role {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  @Field(() => String)
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
