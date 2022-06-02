import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1654205365440 implements MigrationInterface {
    name = 'migration1654205365440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cathedra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number" character varying(100), "square" integer, CONSTRAINT "PK_5a27018b4825702b59c49260b60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "square"`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "number" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "square" integer`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "name" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "processor" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "RAM" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "GPU" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "GPU"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "RAM"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "processor"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "square"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "square" integer`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "number" character varying(100)`);
        await queryRunner.query(`DROP TABLE "cathedra"`);
    }

}
