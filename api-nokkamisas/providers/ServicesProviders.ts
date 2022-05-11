import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class ServicesProvides {
  public static needsApplication = false

  constructor(protected application: ApplicationContract) {}
  public register() {
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is read
    const UserService = (await import('App/Services/UserService')).default
    this.application.container.bind('@ioc:Services/UserService', () => new UserService())

    //#region repositories
    //#endregion
    //#region services
    //#endregion
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
