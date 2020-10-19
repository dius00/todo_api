## This project was developed during my time as a Student at Code Chrysalis.

# EasyDo API 
![alt text](https://github.com/dius00/todo_api/blob/main/img/logo.png?raw=true)

EasyDo is minimalist ToDo API, build on GraphQL to give you more time to focus on you!

## Goal

It's time to take a step back and focus on what's important You.
Increase your productivity Do more, and take back Your time with EasyDo!

# Table of Contents
1. [Schema](#schema)
2. [GraphQL Queries and Mutations](#graphql-queries-and-mutations)


## Upcoming...
- [ ]  Login System
- [ ]  Token Integration
- [ ]  API Keys

## How it was built
- TypeORM
- TypeGraphQL
- Express
- PostgreSQL

---


## Schema

### Database

```
type User {
  id: ID!
  username: String!
  passwordHash: String!
  displayName: String!
}

type TDList {
  id: ID!
  list_owner: User!
  listname: String!
  is_public: Boolean!
}

type ToDo {
  id: ID!
  description: String!
  completed: Boolean!
  parent_list: TDList!
}
```

### Input Types

```
input CreateTDList {
  list_owner: String!
  listname: String!
  is_public: Boolean!
}

input CreateToDo {
  description: String!
  completed: Boolean!
  parent_list: String!
}

input CreateUser {
  username: String!
  passwordHash: String!
  displayName: String!
}

input InputList {
  id: String!
  list_owner: String
  listname: String
  is_public: Boolean
}

input InputToDo {
  id: String!
  description: String
  completed: Boolean
  parent_list: String
}

input InputUser {
  id: String!
  username: String
  passwordHash: String
  displayName: String
}
```

---

## GraphQL Queries and Mutations

This section represents the most updated documentation on the current status of EasyDo.
Please look at schema for help with the types definition


### Queries (equivalent to GET)

```
type Query {
  getUser(id: String!): User!

  getList(id: String!): TDList!

  getUserLists(id: String!): [TDList!]!

  getToDosinList(id: String!): [ToDo!]!

  getToDo(id: String!): ToDo!
}
```

### Mutations

```
type Mutation {

  addUser(data: CreateUser!): User!

  addToDo(data: CreateToDo!): ToDo!

  addList(data: CreateTDList!): TDList!

  switchCompleteToDo(id: String!): ToDo!

  deleteUser(id: String!): String!

  deleteList(id: String!): String!

  deleteToDo(id: String!): String!

  modifyList(data: InputList!): TDList!

  modifyToDo(data: InputToDo!): ToDo!

  modifyListPrivacy(id: String!): TDList!

  modifyUser(data: InputUser!): User!
}
```
