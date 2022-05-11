import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserInterface from '@ioc:Services/UserService'

export default class UsersController {
  constructor(protected userInterface: typeof UserInterface) {}
  //listar usuários
  public async getAll({ request, response }: HttpContextContract) {
    try {
      const data = request.all()
      const users = await this.userInterface.getAllUsers(data)
      response.json(users)
    } catch (error) {
      throw error
    }
  }
  // listar usuários id
  public async get({ response, params }: HttpContextContract) {
    try {
      const resp = await this.userInterface.getById(params.id)
      return response.json(resp)
    } catch (error) {
      throw error
    }
  }
  //criar usuários
  public async post({ request, response }: HttpContextContract) {
    try {
      const parameters = await request.body()
      const resp = await this.userInterface.post(parameters)
      return response.json(resp)
    } catch (error) {
      throw error
    }
  }

  //editar usuarios id
  public async put({ request, response }: HttpContextContract) {
    try {
      const parameters = await request.body()
      const resp = await this.userInterface.put(parameters)
      return response.json(resp)
    } catch (error) {
      throw error
    }
  }
}
