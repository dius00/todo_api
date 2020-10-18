import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import User from "./UserModel";

@Entity({name: "lists" /* Relation name in database */})
class List {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne(() => User, list_owner => list_owner.id, {onDelete:'CASCADE'})
  public list_owner: User;

  @Column()
  public listname: string;

  @Column()
  public is_public: boolean;
}

export default List;


// TO_DO change is_public to is_shared and and add a new column for is_shared_with