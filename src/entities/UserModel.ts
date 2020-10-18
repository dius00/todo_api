import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({name: "users" /* Relation name in database */})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  public id: string;

  @Column()
  @Field(() => String)
  public username: string;

  @Column()
  @Field(() => String)
  public passwordHash: string;

  @Column()
  @Field(() => String)
  public displayName: string;
}

// export default User;
