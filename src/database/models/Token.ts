import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { UserModel } from './User'

@Entity("token")
export class TokenModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(type => UserModel)
  @JoinColumn()
  user: UserModel

  @Column()
  userId: string

  @Column({ name: 'refresh_token' })
  refreshToken: string
}