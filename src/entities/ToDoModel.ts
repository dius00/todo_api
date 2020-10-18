import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import List from "./ListModel";

@Entity({name: "todos" /* Relation name in database */})
class ToDo {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public description : string;

  @Column()
  public completed: boolean;

  @ManyToOne(() => List, parent_list => parent_list.id, {onDelete:'CASCADE'})
  public parent_list: string;
}

export default ToDo;
