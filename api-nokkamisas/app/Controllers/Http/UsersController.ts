import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from '@ioc:Services/UserService'

export default class UsersController {
  constructor(protected userService: typeof UserService) {}
  //listar usuários
  public async getAll({ request, response }: HttpContextContract) {
    try {
      const data = request.all()
      const users = await this.userService.getAllUsers(data)
      response.json(users)
    } catch (error) {
      throw error
    }
  }
  // listar usuários id
  public async get({ response, params }: HttpContextContract) {
    try {
      const resp = await this.userService.getById(params.id)
      return response.json(resp)
    } catch (error) {
      throw error
    }
  }
  //criar usuários
  public async post({ request, response }: HttpContextContract) {
    try {
      const parameters = await request.body()
      const resp = await this.userService.post(parameters)
      return response.json(resp)
    } catch (error) {
      throw error
    }
  }

  //editar usuarios id
  public async put({ request, response }: HttpContextContract) {
    try {
      const parameters = await request.body()
      const resp = await this.userService.put(parameters)
      return response.json(resp)
    } catch (error) {
      throw error
    }
  }
}
