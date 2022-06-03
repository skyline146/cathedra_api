import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('auditoria')
export class AuditoriaModel {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 100, nullable: true })
  number: string

  @Column({ nullable: true })
  square: number

}
