import { DateTime } from 'luxon'

export default class ProductDTO {
  public id: number

  public createdAt: DateTime

  public updatedAt: DateTime

  public categoria: string

  public nomeProduto: string

  public descricaoProduto: string

  public valor: string

  public imagem: string
}
