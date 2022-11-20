import { MigrationInterface, QueryRunner } from "typeorm";

export class createUpdateFields1668982886266 implements MigrationInterface {
    name = 'createUpdateFields1668982886266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "done" boolean NOT NULL DEFAULT false, "created" integer NOT NULL, "updated" integer NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
