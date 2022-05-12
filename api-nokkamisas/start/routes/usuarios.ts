import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('login', async ({ auth, request, response }) => {
    const email = request.input('email')
    const senha = request.input('senha')

    try {
      const token = await auth.use('api').attempt(email, senha)
      return token
    } catch {
      return response.badRequest('Credenciais Incorretas')
    }
  })
}).prefix('api')
