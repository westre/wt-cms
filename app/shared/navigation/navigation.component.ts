import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Module } from '../module/module.entity';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent {
    modules: Module[] = [];

    addModule(module: Module): void {
        this.modules.push(module);
    }
}
