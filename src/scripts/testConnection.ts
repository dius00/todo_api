import DatabaseConnectionManager from "../database";
import { getRepository } from "typeorm";
import { User } from "../entities/UserModel"
import { TDList } from "../entities/ListModel";
import { ToDo } from "../entities/ToDoModel"

DatabaseConnectionManager.connect()
  .then(() => {
    console.info("Successfully connected to your database!");
  }).then(async () => {
    console.log(await getRepository(User).query(`SELECT * FROM USERS`));
    console.log(await getRepository(TDList).query(`SELECT * FROM TDLIST`));
    console.log(await getRepository(ToDo).query(`SELECT * FROM TODOS`));
  })
  .catch((err) => {
    console.error(err);
    console.error("Couldn't connect to your database. Please check your configuration.");
  });
