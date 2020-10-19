import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';
import { TDList } from "./ListModel";

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

  @ManyToOne(() => TDList, parent_list => parent_list.id, {onDelete:'CASCADE', eager: true})
  @Field(() => TDList)
  public parent_list: TDList;
}

// export default ToDo;
