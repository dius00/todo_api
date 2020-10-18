const { gql } = require("apollo-server");

const typeDefs = gql`
# DB table definition
type User {
    id: String!
    username: string!
    passwordHash: string!
    displayName: string!
}

type ToDo {
    id: string!
    description : string!
    completed: boolean!
    parent_list: string!
}

type List {
    id: string!
    list_owner: string!
    listname: string!
    is_public: boolean!
}

# Query (get) table definition
type Query {
    getUser(id: String!): User
    getList(id: String!): List
    getUserLists(id: String!): List
    getToDosinList(id: String!): [ToDo]
    getToDo(id: String!): ToDo
}

# Input definition
input UserInput {
    username: string!
    passwordHash: string!
    displayName: string!
}

input ListInput {
    list_owner: string
    listname: string
    is_public: boolean
}

input ToDoInput {
    description: string
    completed: boolean
    parent_list: string
}

# Mutation definition
type Mutation {

    # Add methods (post)
    addUser(input: User!) :String!
    addList(input: ListInput!) :String!
    addToDo(input: ToDoInput!) :String!

    # Modify methods (patch)
    modifyList(id: String, input: ListInput) :String!
    makeListPublic(id: String!) :String!

    modifyToDo(id String, input: ToDoInput!) :String!

    # Delete methods (Delete)
    deleteUser(id: String!) :String!
    deleteList(id: String!) :String!
    deleteToDo(id: String!) :String!
}
`;

module.exports = {
  typeDefs
};