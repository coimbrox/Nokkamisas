declare module '@ioc:Services/UserService' {
  import UserDTO from 'App/Models/DTOs/UserDTO'
  export interface UserInterface {
    getAllUsers(): Promise<UserDTO[]>
    getById(id: number): Promise<UserDTO>
    postUser(user: UserDTO): Promise<UserDTO>
    put(user: UserDTO): Promise<UserDTO>
    delete(id: number): Promise<number>
  }
  const UserService: UserInterface
  export default UserService
}
