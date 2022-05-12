import { DateTime } from 'luxon'

export default class UserDTO {
  public id: number

  public nome: string

  public email: string

  public telefone: string

  public senha: string

  public rememberMeToken?: string

  public createdAt: DateTime

  public updatedAt: DateTime
}
