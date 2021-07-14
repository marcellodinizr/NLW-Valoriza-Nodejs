import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompliments1626262864984 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "compliments",
				columns: [],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
