declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(model: any): UserDTO[]
    getById(id: number): UserDTO
    postUsers(model: any): UserDTO
    putUsers(model: any): UserDTO
  }
  const UserService: UserInterface
  export default UserService
}
