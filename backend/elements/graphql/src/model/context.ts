export type Context = {
    jwtClaims?: {
        username: string;
    };
}

export type Access = 'notLoggedIn' | 'owner' | 'read' | 'denied'
