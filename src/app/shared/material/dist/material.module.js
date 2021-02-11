"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                card_1.MatCardModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule
            ],
            exports: [
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                card_1.MatCardModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
