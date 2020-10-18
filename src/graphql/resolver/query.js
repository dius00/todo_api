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
};
  const mutation = {
    addUser: async (parent, args) => {
      return await UserDB.insert(args.input);
    },
  
    addList: async (parent, args) => {
      return await ListDB.insert(args.input);
    },
  
    addToDo: async (parent, args) => {
      return await ToDoDB.insert(args.input);
    },
  
    modifyList: async (parent, args) => {
      if(args.id) {
      const list = ListDB.findOne(args.id);
      for(const key of Object.keys(args.input)) if(key) list[key] = args[key];
      ListDB.save(list);
      return `list has been updated`;
      }
      return `invalid list id`;
    },
  
    makeListPublic: async (parent, args) => {
      if(args.id) {
      const list = ListDB.findOne(args.id);
      if(list.is_public) list.is_public = true;
      ListDB.save(list);
      return `the list is now public`;
      }
      return `invalid list id`;
    },
  
    modifyToDo: async (parent, args) => {
      if(args.id) {
      const todo = await ToDoDB.findOne(args.id);
      for(const key of Object.keys(args.input)) if(key) todo[key] = args[key];
      ListDB.save(todo);
      return `To-Do has been updated`;
      }
      return `Invalid To-Do id`;
    },
  
    getToDo: async (parent, args) => {
      return await ToDoDB.findOne(args.id);
    },
  
    deleteUser: async (parent, args) => {
      if(UserDB.hasId(args.id)) {
        await UserDB.delete(args.id);
        return `user has been delete`
      }
      return `no user with that id has been found`;
    },
  
    deleteList: async (parent, args) => {
      if(ListDB.hasId(args.id)) {
        await ListDB.delete(args.id);
        return `list has been delete`
      }
      return `no list with that id has been found`;
    },
  
    deleteToDo: async (parent, args) => {
      if(ToDoDB.hasId(args.id)) {
        await ToDoDB.delete(args.id);
        return `user has been delete`
      } 
      return `no to-do with that id has been found`;
    },
  
  }


module.exports = {
  query
}