import {MigrationInterface, QueryRunner} from "typeorm";

export class initialTable1603030923675 implements MigrationInterface {
    name = 'initialTable1603030923675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "passwordHash" character varying NOT NULL, "displayName" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "listname" character varying NOT NULL, "is_public" boolean NOT NULL, "listOwnerId" uuid, CONSTRAINT "PK_268b525e9a6dd04d0685cb2aaaa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "todos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "completed" boolean NOT NULL, "parentListId" uuid, CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lists" ADD CONSTRAINT "FK_ca550f2d6a3b126e98fdeaf50d7" FOREIGN KEY ("listOwnerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "todos" ADD CONSTRAINT "FK_b0be307e703047e917b00bed713" FOREIGN KEY ("parentListId") REFERENCES "lists"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos" DROP CONSTRAINT "FK_b0be307e703047e917b00bed713"`);
        await queryRunner.query(`ALTER TABLE "lists" DROP CONSTRAINT "FK_ca550f2d6a3b126e98fdeaf50d7"`);
        await queryRunner.query(`DROP TABLE "todos"`);
        await queryRunner.query(`DROP TABLE "lists"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
