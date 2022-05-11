declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(model: any): UserDTO[]
    getById(id: number): UserDTO
    post(model: any): UserDTO
    put(model: any): UserDTO
  }
  const UserService: UserInterface
  export default UserService
}
