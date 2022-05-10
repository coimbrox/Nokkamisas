declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(): UserDTO[]
    getById(id: number): UserDTO
    // putUsers
  }
  const UserService: UserInterface
  export default UserService
}
