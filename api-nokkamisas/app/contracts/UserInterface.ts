declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(): Promise<UserDTO[]>
    getById(id: number): UserDTO
    postUser(user: UserDTO): Promise<UserDTO>
    put(user: UserDTO): UserDTO
    delete(id: number): UserDTO
  }
  const UserService: UserInterface
  export default UserService
}
