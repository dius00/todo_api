import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { TDList } from "../entities/ListModel"
const dummyList = require('./lists.json');

export default class CreateList implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection.createQueryBuilder().insert().into(TDList).values(dummyList).execute();
    }
}