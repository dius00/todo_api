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

  @Query(() => User)
  getUser(@Arg("id") id: string) {
    return User.findOne(id);
  }

  @Query(() => List)
  getList(@Arg("id") id: string) {
    return List.findOne(id);
  }
  
  @Query(() => [List])
  getUserLists(@Arg("id") id: string) {
    return List.find({where: {
      list_owner: id
    }});
  }

  @Query(() => [ToDo])
  getToDosinList(@Arg("id") id: string) {
    return ToDo.find({where: {
      parent_list: id
    }});
  }

  @Query(() => ToDo)
  getToDo(@Arg("id") id: string) {
    return ToDo.findOne(id);
  }

  @Mutation(( )=> String)
  addUser(@Arg("data") data: CreateUser) {
    const newUser = User.create(data);
    User.save(newUser);
    return `${newUser.displayName} has been created`;
  }


}
// }
// # Add methods (post)
// addUser(input: User!) :String!
// addList(input: ListInput!) :String!
// addToDo(input: ToDoInput!) :String!

// # Modify methods (patch)
// modifyList(id: String, input: ListInput) :String!
// makeListPublic(id: String!) :String!

// modifyToDo(id String, input: ToDoInput!) :String!

// # Delete methods (Delete)
// deleteUser(id: String!) :String!
// deleteList(id: String!) :String!
// deleteToDo(id: String!) :String!







// getUser(id: String!): User
// getList(id: String!): List
// getUserLists(id: String!): List
// getToDosinList(id: String!): [ToDo]
// getToDo(id: String!): ToDo
