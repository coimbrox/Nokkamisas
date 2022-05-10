import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({ columnName: 'nome' })
  public nome: string

  @column({ columnName: 'email' })
  public email: string

  @column({ columnName: 'senha' })
  public senha: string

  @column({ columnName: 'telefone' })
  public telefone: string
}
