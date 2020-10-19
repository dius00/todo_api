import { CreateTDList } from "../../inputs/CreateList";
import { CreateToDo } from "../../inputs/CreateToDo";
import { CreateUser } from "../../inputs/CreateUser";
import { InputList } from "../../inputs/InputList";
import { InputToDo } from "../../inputs/InputToDo";
import { InputUser } from "../../inputs/InputUser";
import { User } from "../../entities/UserModel";
import { TDList } from "../../entities/ListModel";
import { ToDo } from "../../entities/ToDoModel";
import { Resolver, Query, Mutation, Arg, Args } from "type-graphql";
 
@Resolver()
export class GQLResolver {

  @Query(() => User)
  async getUser(@Arg("id") id: string) {
    return await User.findOne(id);
  }

  @Query(() => TDList)
  async getList(@Arg("id") id: string) {
    return await TDList.findOne(id);
  }
  
  @Query(() => [TDList])
  async getUserLists(@Arg("id") id: string) {
    return await TDList.find({where: {
      list_owner: id
    }});
  }

  @Query(() => [ToDo])
  async getToDosinList(@Arg("id") id: string) {
    return await ToDo.find({where: {
      parent_list: id
    }});
  }

  @Query(() => ToDo)
  async getToDo(@Arg("id") id: string) {
    return await ToDo.findOne(id);
  }


  /*

    ADD METHODS

  */


  @Mutation(( )=> User)
  async addUser(@Arg("data") data: CreateUser) {
    const newUser = await  User.create(data);
    await User.save(newUser);
    return newUser;
  }
  
  @Mutation(() => ToDo)
  async addToDo(@Arg("data") data: CreateToDo) {
    const newToDo = await ToDo.create(data);
    await ToDo.save(newToDo);
    return newToDo;
  }

  @Mutation(() => TDList) // unclear why error is thrown, works in production
  async addList(@Arg("data") data: CreateTDList){
    const newList = await TDList.create(data);
    await TDList.save(newList);
    return newList;
  }


  /*

    DELETE METHODS

  */


  @Mutation(() => String)
  async deleteUser(@Arg("id") id: string) {
    if(!await User.findOne(id)) return `A user with ${id} does not exist`;
    else {
      await User.delete(id);
      return `User ${id} has been deleted`;
    }
  }

  @Mutation(() => String)
  async deleteList(@Arg("id") id: string) {
    if(!await TDList.findOne(id)) return `A List with ${id} does not exist`;
    else {
      await User.delete(id);
      return `List ${id} has been deleted`;
    }
  }

  @Mutation(() => String)
  async deleteToDo(@Arg("id") id:string) {
    if(!await ToDo.findOne(id)) return `A List with ${id} does not exist`;
    else {
      await ToDo.delete(id);
      return `List ${id} has been deleted`;
    }
  }


  /*

    PATCH METHODS

  */


  @Mutation(() => TDList)
  async modifyList(@Arg("data") data:InputList) {
    const patchList = await this.getList(data.id);
    if(Object.keys(data).length === 1) return patchList;
    for(const key in Object.keys(data)) if(data[key]) patchList[key] = data[key];
    await TDList.save(patchList);
    return patchList;
  }

  @Mutation(() => ToDo)
  async modifyToDo(@Arg("data") data:InputToDo) {
    const patchToDo = await this.getToDo(data.id);
    if(Object.keys(data).length === 1) return patchToDo;
    for(const key in Object.keys(data)) if(data[key]) patchToDo[key] = data[key];
    await ToDo.save(patchToDo);
    return patchToDo;
  }

  @Mutation(() => ToDo)
  async switchCompleteToDo(@Arg("id") id:String) {
    const switchToDO = await ToDo.findOne(id);
    switchToDO.completed = !switchToDO.completed;
    ToDo.save(switchToDO);
    return switchToDO;
  }

  @Mutation(() => TDList)
  async modifyListPrivacy(@Arg("id") id: string) {
    const patchList = await this.getList(id);
    if(!patchList.is_public) {
      patchList.is_public = true;
    } else {
      patchList.is_public = false;
    }
    await TDList.save(patchList);
    return patchList;
  }

  @Mutation(() => User)
  async modifyUser(@Arg("data") data:InputUser) {
    const patchUser = await this.getToDo(data.id);
    if(Object.keys(data).length === 1) return patchUser;
    for(const key in Object.keys(data)) if(data[key]) patchUser[key] = data[key];
    await ToDo.save(patchUser);
    return patchUser;
  }
}
