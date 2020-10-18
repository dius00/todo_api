import { CreateList } from "../../inputs/CreateList";
import { CreateToDo } from "../../inputs/CreateToDo";
import { CreateUser } from "../../inputs/CreateUser";
import { InputList } from "../../inputs/InputList";
import { InputToDo } from "../../inputs/InputToDo";
import { InputUser } from "../../inputs/InputUser";
import { User } from "../../entities/UserModel";
import { List } from "../../entities/ListModel";
import { ToDo } from "../../entities/ToDoModel";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export class GQLResolver {

  @Query(()=> User)
  getUser(@Arg("id") id: string) {
    return User.findOne({where:{id}});
  }


}
// }

// getUser(id: String!): User
// getList(id: String!): List
// getUserLists(id: String!): List
// getToDosinList(id: String!): [ToDo]
// getToDo(id: String!): ToDo
