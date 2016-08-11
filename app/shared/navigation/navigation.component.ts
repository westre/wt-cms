import { Component, OnInit, Input } from '@angular/core';
import { SystemModule } from '../module/system-module.entity';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.css']
})

export class NavigationComponent {
    modules: SystemModule[] = [];

    addModule(module: SystemModule): void {
        this.modules.push(module);
    }
}
