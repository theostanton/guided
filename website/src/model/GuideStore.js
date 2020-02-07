"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const generated_1 = require("api/generated");
const api_1 = require("api");
class GuideStore {
    constructor() {
        this.guide = undefined;
    }
    subscribe(slug, owner) {
        this.fetch(slug, owner).then();
    }
    async fetch(slug, owner) {
        const variables = {
            slug,
            owner,
        };
        const { data } = await api_1.client.query({
            query: generated_1.GetGuideBySlugDocument,
            variables,
        });
        const guide = data.guides.nodes[0];
        mobx_1.runInAction(() => {
            this.guide = guide;
        });
    }
    unsubscribe() {
        this.subscription?.unsubscribe();
        this.guide = undefined;
    }
}
__decorate([
    mobx_1.observable
], GuideStore.prototype, "guide", void 0);
exports.default = GuideStore;
const guideStore = new GuideStore();
exports.guideStore = guideStore;
//# sourceMappingURL=GuideStore.js.map