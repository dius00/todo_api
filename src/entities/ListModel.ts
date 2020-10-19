import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from "./UserModel";

@ObjectType()
@Entity({name: "tdlist" /* Relation name in database */})
export class TDList extends BaseEntity{

  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  public id: string;

  @ManyToOne( type => User, list_owner => list_owner.id, {onDelete:'CASCADE', eager:true})
  @Field(() => User)
  public list_owner: User;

  @Column()
  @Field(() => String)
  public listname: string;

  @Column()
  @Field(() => Boolean)
  public is_public: boolean;
}

// export default List;


// TO_DO change is_public to is_shared and and add a new column for is_shared_with