import { UserInterface } from '@ioc:Services/UserService'
import UserDTO from 'App/Models/DTOs/UserDTO'
import User from 'App/Models/entities/User'

export default class UserService implements UserInterface {
  public async getAllUsers(): Promise<UserDTO[]> {
    const userList: UserDTO[] = []
    const retorno = await User.all()
    retorno.forEach((element) => {
      userList.push(element.toObject() as UserDTO)
    })

    return userList as UserDTO[]
    // throw new Error('Method not implemented.')
  }
  public getById(id: number): Promise<UserDTO> {
    throw new Error('Method not implemented.')
  }
  public async postUser(user: UserDTO): Promise<UserDTO> {
    await User.create({
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      telefone: user.telefone,
    })

    return user
  }
  public put(user: UserDTO): Promise<UserDTO> {
    throw new Error('Method not implemented.')
  }
  public delete(id: number): Promise<number> {
    throw new Error('Method not implemented.')
  }
}
