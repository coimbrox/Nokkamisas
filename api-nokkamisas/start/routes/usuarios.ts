import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/usuarios', 'UsersController.getAll')
  Route.get('/usuarios/:id', 'UsersController.get')
  Route.post('/usuarios/', 'UsersController.post')
  Route.put('/usuarios/:id', 'UsersController.put')
}).prefix('/api')
