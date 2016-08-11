import { Module } from './module.entity';

import { Routes, RouterModule } from '@angular/router';
import { paths } from '../../app.routing';

export class SystemModule extends Module {
    component: string;
    url: string;

    constructor(component: string, module: Module, url: string) {
        super(module.name, module.version, module.image);

        
        
        this.component = component;
        this.url = url;
    }
}