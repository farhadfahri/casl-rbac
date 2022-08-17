import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GraphQLUUID } from 'graphql-scalars';
import { Role } from '../../roles/entities/role.entity';

@ObjectType('User')
export class User {
  @Field(() => GraphQLUUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  email: string;

  @ManyToOne(() => Role, (role) => role.users, { onUpdate: 'CASCADE' })
  @JoinColumn()
  role: Role;
}
