"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigurationModule = void 0;
const appConfig_service_1 = require("../services/appConfig.service");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
let AppConfigurationModule = class AppConfigurationModule {
};
exports.AppConfigurationModule = AppConfigurationModule;
exports.AppConfigurationModule = AppConfigurationModule = __decorate([
    (0, common_1.Module)({
        exports: [appConfig_service_1.AppConfigurationService],
        imports: [config_1.ConfigModule.forRoot()],
        providers: [appConfig_service_1.AppConfigurationService],
    })
], AppConfigurationModule);
//# sourceMappingURL=appConfig.module.js.map