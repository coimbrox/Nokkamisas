import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Route.get('/produtos', 'UsersController.getAll')
  // Route.get('/produtos/:id', 'UsersController.get')
  // Route.post('/usuarios', 'UsersController.post')
  // Route.put('/usuarios/:id', 'UsersController.put')
}).prefix('/api')
