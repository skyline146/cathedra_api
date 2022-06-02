import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"


@Entity('auditoria')
export class AuditoriaEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 100, nullable: true })
  number: string

  @Column({ nullable: true })
  square: number

}
