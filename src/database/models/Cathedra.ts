import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('cathedra')
export class CathedraModel {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100, nullable: true })
    name: string

}
