import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserInterface from '@ioc:Services/UserService'

export default class UsersController {
  constructor(protected userInterface: typeof UserInterface) {}
  //listar usuários
  public async index({ response }: HttpContextContract) {
    try {
      const users = await this.userInterface.getAllUsers()
      response.json(users)
    } catch (error) {
      throw error
    }
  }
  // listar usuários id
  public async show({ response, params }: HttpContextContract) {
    try {
      const users = await this.userInterface.getById(params.id)
      response.json(users)
    } catch (error) {
      throw error
    }
  }

  //editar usuarios id
  public async put({ response, params }: HttpContextContract) {
    try {
      const users = await this.userInterface.putUsersById(params.id)
      response.json(users)
    } catch (error) {
      throw error
    }
  }
}
