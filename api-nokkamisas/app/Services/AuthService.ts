import { AuthInterface } from '@ioc:Services/AuthService'
import AuthDTO from 'App/Models/DTOs/AuthDTO'
import Auth from 'App/Models/entities/Auth'

export default class AuthService implements AuthInterface {
  public async post({ auth, request, response, authenticate: AuthDTO }): Promise<AuthDTO> {
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
