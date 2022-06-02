import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"


@Entity('cathedra')
export class CathedraEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100, nullable: true })
    name: string

}
