var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionTabQuestionsComponent } from './accordion-tab-questions.component';
import { CustomDropdownModule } from '../../../../../modules/custom-dropdown/custom-dropdown.module';
var AccordionTabQuestionsModule = (function () {
    function AccordionTabQuestionsModule() {
    }
    AccordionTabQuestionsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                CustomDropdownModule
            ],
            declarations: [
                AccordionTabQuestionsComponent
            ],
            exports: [
                AccordionTabQuestionsComponent
            ]
        })
    ], AccordionTabQuestionsModule);
    return AccordionTabQuestionsModule;
}());
export { AccordionTabQuestionsModule };
