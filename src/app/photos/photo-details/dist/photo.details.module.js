"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoDetailsModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var validation_message_module_1 = require("src/app/shared/components/validation-messages/validation.message.module");
var show_if_logged_module_1 = require("src/app/shared/directives/show-if-logged/show-if-logged.module");
var photo_module_1 = require("../photo/photo.module");
var photo_comments_component_1 = require("./photo-comments/photo-comments.component");
var photo_owner_only_directive_1 = require("./photo-owner-only/photo-owner-only.directive");
var photo_details_component_1 = require("./photo.details.component");
var PhotoDetailsModule = /** @class */ (function () {
    function PhotoDetailsModule() {
    }
    PhotoDetailsModule = __decorate([
        core_1.NgModule({
            declarations: [
                photo_details_component_1.PhotoDetailsComponent,
                photo_comments_component_1.PhotoCommentsComponent,
                photo_owner_only_directive_1.PhotoOwnerOnlyDirective
            ],
            exports: [
                photo_details_component_1.PhotoDetailsComponent,
                photo_comments_component_1.PhotoCommentsComponent
            ],
            imports: [common_1.CommonModule,
                photo_module_1.PhotoModule,
                forms_1.ReactiveFormsModule,
                validation_message_module_1.ValidationMessageModule,
                router_1.RouterModule,
                show_if_logged_module_1.ShowIfLoggedModule
            ]
        })
    ], PhotoDetailsModule);
    return PhotoDetailsModule;
}());
exports.PhotoDetailsModule = PhotoDetailsModule;
