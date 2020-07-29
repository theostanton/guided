export default abstract class Router {
  abstract goToLogin(): Promise<void>

  abstract goToSignup(): Promise<void>

  abstract goToProfile(username: string): Promise<void>

  abstract goToGuide(username: string, slug: string): Promise<void>

  abstract goHome(): Promise<void>

  abstract goToCreate(): Promise<void>
}