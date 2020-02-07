"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const store_1 = __importDefault(require("store"));
const generated_1 = require("api/generated");
const client_1 = require("api/client");
const api_1 = require("api");
class Index {
    constructor() {
        const value = store_1.default.get(client_1.USER_KEY);
        if (value) {
            this.user = JSON.parse(value);
        }
    }
    get isLoggedIn() {
        return this.user !== undefined;
    }
    get owner() {
        if (this.isLoggedIn) {
            return this.user?.username;
        }
        throw new Error("AuthStore.owner - not logged in");
    }
    async login(email, password) {
        const variables = {
            email,
            password,
        };
        const result = await api_1.client.mutate({
            mutation: generated_1.LoginDocument,
            variables,
        });
        const usernameResult = await api_1.client.query({
            query: generated_1.GetUsernameDocument,
            variables: {
                email,
            },
        });
        const username = usernameResult.data.users.nodes[0].username;
        const bearerToken = result.data.authenticate.jwtToken;
        this.setUser({
            username,
            email,
            bearerToken,
        });
    }
    async signUp(username, email, password) {
        const variables = {
            username,
            email,
            password,
        };
        await api_1.client.mutate({
            mutation: generated_1.SignUpDocument,
            variables,
        });
        await this.login(email, password);
    }
    setUser(user) {
        if (user) {
            store_1.default.set(client_1.USER_KEY, JSON.stringify(user, null, 4));
        }
        else {
            store_1.default.set(client_1.USER_KEY, undefined);
        }
        mobx_1.runInAction(() => {
            this.user = user;
        });
    }
    logOut() {
        this.user = undefined;
    }
}
__decorate([
    mobx_1.observable
], Index.prototype, "user", void 0);
__decorate([
    mobx_1.computed
], Index.prototype, "owner", null);
__decorate([
    mobx_1.action
], Index.prototype, "logOut", null);
exports.default = Index;
const authStore = new Index();
exports.authStore = authStore;
//# sourceMappingURL=index.js.map