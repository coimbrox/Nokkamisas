declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(): UserDTO[]
    getById(id: number): UserDTO
    post(user: UserDTO): UserDTO
    put(user: UserDTO): UserDTO
    delete(id: number): UserDTO
  }
  const UserService: UserInterface
  export default UserService
}
