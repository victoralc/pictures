"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoreModule = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var alert_module_1 = require("../shared/components/alert/alert.module");
var loading_module_1 = require("../shared/components/loading/loading.module");
var menu_module_1 = require("../shared/components/menu/menu.module");
var request_interceptor_1 = require("./auth/request.interceptor");
var footer_component_1 = require("./footer/footer.component");
var header_component_1 = require("./header/header.component");
var material_module_1 = require("../shared/material/material.module");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            declarations: [header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            exports: [header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                alert_module_1.AlertModule,
                loading_module_1.LoadingModule,
                menu_module_1.MenuModule,
                material_module_1.MaterialModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: request_interceptor_1.RequestInterceptor,
                    multi: true
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
