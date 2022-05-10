import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({ columnName: 'categoria' })
  public categoria: string

  @column({ columnName: 'nomeProduto' })
  public nomeProduto: string

  @column({ columnName: 'descricaoProduto' })
  public descricaoProduto: string

  @column({ columnName: 'valor' })
  public valor: string

  @column({ columnName: 'imagem' })
  public imagem: string
}
