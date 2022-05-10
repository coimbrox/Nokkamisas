declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(): UserDTO[]
    getById(id: number): UserDTO
    putUsersById(id: number): UserDTO
  }
  const UserService: UserInterface
  export default UserService
}
