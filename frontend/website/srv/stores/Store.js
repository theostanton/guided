"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class Store {
    hasData() {
        return !!this.guide && !!this.rides;
    }
    // @action
    // selectRide(ride: Ride) {
    //     this.selectedRide = ride
    // }
    update({ guide, rides, refetch }) {
        console.log('update');
        this.refetch = refetch;
        this.guide = guide;
        this.rides = rides;
    }
}
__decorate([
    mobx_1.observable
], Store.prototype, "guide", void 0);
__decorate([
    mobx_1.observable
], Store.prototype, "rides", void 0);
__decorate([
    mobx_1.observable
], Store.prototype, "selectedRide", void 0);
__decorate([
    mobx_1.action
], Store.prototype, "update", null);
exports.Store = Store;
//# sourceMappingURL=Store.js.map