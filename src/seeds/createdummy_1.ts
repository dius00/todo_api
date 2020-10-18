import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { User } from "../entities/UserModel"
const dummyUser = require('./users.json');

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection.createQueryBuilder().insert().into(User).values(dummyUser).execute();
    }
}