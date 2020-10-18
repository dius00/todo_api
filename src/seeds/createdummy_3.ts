import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { ToDo } from "../entities/ToDoModel"
const dummyTodo = require('./todos.json');

export default class CreateTodo implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection.createQueryBuilder().insert().into(ToDo).values(dummyTodo).execute();
    }
}