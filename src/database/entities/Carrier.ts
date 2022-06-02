import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"


@Entity('carrier')
export class CarrierEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100, nullable: true })
    processor: string

    @Column({ length: 100, nullable: true })
    RAM: string

    @Column({ length: 100, nullable: true })
    GPU: string

}
