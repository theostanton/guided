export default abstract class Router {
  abstract goToLogin():Promise<void>
  abstract goToSignup():Promise<void>
  abstract goToProfile(username:string):Promise<void>
  abstract goHome():Promise<void>
}