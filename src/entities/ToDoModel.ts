import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';
import { List } from "./ListModel";

@ObjectType()
@Entity({name: "todos" /* Relation name in database */})
export class ToDo extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  public id: string;

  @Column()
  @Field(() => String)
  public description : string;

  @Column()
  @Field(() => Boolean)
  public completed: boolean;

  @ManyToOne(() => List, parent_list => parent_list.id, {onDelete:'CASCADE'})
  @Field(() => List)
  public parent_list: string;
}

// export default ToDo;
