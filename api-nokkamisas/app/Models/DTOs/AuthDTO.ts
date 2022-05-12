import { DateTime } from 'luxon'

export default class AuthDTO {
  public id: number

  public email: string

  public password: string

  public rememberMeToken?: string

  public createdAt: DateTime

  public updatedAt: DateTime
}
