import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1654206428481 implements MigrationInterface {
    name = 'migration1654206428481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "auditoria" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number" character varying(100), "square" integer, CONSTRAINT "PK_135fe98308816fe3a2d458e6637" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carrier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "processor" character varying(100), "RAM" character varying(100), "GPU" character varying(100), CONSTRAINT "PK_f615ebd1906f0270d41b3a5a8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(100), "lastName" character varying(100), "email" character varying(100) NOT NULL, "password" character varying(500) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid NOT NULL, "refresh_token" character varying NOT NULL, CONSTRAINT "REL_94f168faad896c0786646fa3d4" UNIQUE ("userId"), CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "square"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "processor"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "RAM"`);
        await queryRunner.query(`ALTER TABLE "cathedra" DROP COLUMN "GPU"`);
        await queryRunner.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_94f168faad896c0786646fa3d4a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_94f168faad896c0786646fa3d4a"`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "GPU" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "RAM" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "processor" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "square" integer`);
        await queryRunner.query(`ALTER TABLE "cathedra" ADD "number" character varying(100)`);
        await queryRunner.query(`DROP TABLE "token"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "carrier"`);
        await queryRunner.query(`DROP TABLE "auditoria"`);
    }

}
