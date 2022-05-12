import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async post({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const senha = request.input('senha')

    try {
      const token = await auth.use('api').attempt(email, senha)
      return token
    } catch {
      return response.badRequest('Credenciais Inválidas')
    }
  }
}
