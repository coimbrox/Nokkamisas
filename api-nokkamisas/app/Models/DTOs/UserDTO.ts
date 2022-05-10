import { DateTime } from 'luxon'

export default class UserDTO {
  public id: number

  public createdAt: DateTime

  public updatedAt: DateTime

  public nome: string

  public email: string

  public senha: string

  public telefone: string
}
