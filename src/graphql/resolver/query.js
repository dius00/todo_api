import { getRepository, Repository, DeleteResult } from "typeorm";
import User from "../../../entities/UserModel";
import List from "../../../entities/ListModel";
import ToDo from "../../../entities/ToDoModel";

const UserDB = getRepository(User);
const ListDB = getRepository(List);
const ToDoDB = getRepository(ToDo);

const query = {
  getUser: async (parent, args) => {
    return await UserDB.findOne(args.id);
  },

  getList: async (parent, args) => {
    return await ListDB.findOne(args.id);
  },

  getUserLists: async (parent, args) => {
    const todo_list = await ListDB.find({
      where:
        {list_owner: args.id},
    });
    return todo_list;
  },

  getToDosinList: async (parent, args) => {
    const todo_list = await ToDoDB.find({
      where:
        {parent_list: args.id},
    });
    return todo_list;
  },

  getToDo: async (parent, args) => {
    return await ToDoDB.findOne(args.id);
  }
}

module.exports = {
  query
}