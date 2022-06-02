import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"


@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100, nullable: true })
    firstName: string

    @Column({ length: 100, nullable: true })
    lastName: string

    @Column({ length: 100, nullable: false })
    email: string

    @Column({ length: 500, nullable: false })
    password: string

}
