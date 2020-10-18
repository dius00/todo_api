require('dotenv').config();

import { getRepository } from "typeorm";
const List = require("../todo_api/src/entities/ListModel");

console.log(getRepository(List).findOne("cd28557f-512d-4577-9e57-75cbc7278985"));
