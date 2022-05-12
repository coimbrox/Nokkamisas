declare module '@ioc:Services/AuthService' {
  import AuthDTO from 'App/Models/DTOs/AuthDTO'
  export interface AuthInterface {
    post(auth: AuthDTO): Promise<AuthDTO>
  }
  const AuthService: AuthInterface
  export default AuthService
}
