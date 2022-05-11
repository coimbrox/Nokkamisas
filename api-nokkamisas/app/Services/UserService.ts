import { UserInterface } from '@ioc:Services/UserService'
import UserDTO from 'App/Models/DTOs/UserDTO'

export default class UserService implements UserInterface {
  public getAllUsers(): UserDTO[] {
    throw new Error('Method not implemented.')
  }
  public getById(id: number): UserDTO {
    throw new Error('Method not implemented.')
  }
  public post(user: UserDTO): UserDTO {
    throw new Error('Method not implemented.')
  }
  public put(user: UserDTO): UserDTO {
    throw new Error('Method not implemented.')
  }
  public delete(id: number): UserDTO {
    throw new Error('Method not implemented.')
  }
}
