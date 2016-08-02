import { Module } from './module.entity';

export class SystemModule extends Module {
    component: string;
    module: Module;

    constructor(component: string, module: Module) {
        super();
        
        this.component = component;
        this.module = module;
    }
}