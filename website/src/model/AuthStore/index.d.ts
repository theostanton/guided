export declare type User = {
    bearerToken: string;
    username: string;
    email: string;
};
export default class Index {
    user: User | undefined;
    constructor();
    get isLoggedIn(): boolean;
    get owner(): string;
    login(email: string, password: string): Promise<void>;
    signUp(username: string, email: string, password: string): Promise<void>;
    setUser(user: User | undefined): void;
    logOut(): void;
}
declare const authStore: Index;
export { authStore, };
//# sourceMappingURL=index.d.ts.map