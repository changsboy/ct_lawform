"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Q2Controller = exports.Q1Controller = exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const path_1 = require("path");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHome(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'index.html'));
    }
    getQ3Page(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'my-app/build', 'index.html'));
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHome", null);
__decorate([
    (0, common_1.Get)('/q3'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getQ3Page", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
let Q1Controller = class Q1Controller {
    getQ1(res) {
        const filePath = (0, path_1.join)(__dirname, '..', 'public', 'q1.html');
        return res.sendFile(filePath);
    }
};
exports.Q1Controller = Q1Controller;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Q1Controller.prototype, "getQ1", null);
exports.Q1Controller = Q1Controller = __decorate([
    (0, common_1.Controller)('q1')
], Q1Controller);
let Q2Controller = class Q2Controller {
    getQ1(res) {
        const filePath = (0, path_1.join)(__dirname, '..', 'public', 'q2.html');
        return res.sendFile(filePath);
    }
};
exports.Q2Controller = Q2Controller;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Q2Controller.prototype, "getQ1", null);
exports.Q2Controller = Q2Controller = __decorate([
    (0, common_1.Controller)('q2')
], Q2Controller);
//# sourceMappingURL=app.controller.js.map