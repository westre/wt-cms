import { Module } from './module.entity';

export class SystemModule extends Module {
    component: string;
    module: Module;
    url: string;

    constructor(component: string, module: Module, url: string) {
        super();
        
        this.component = component;
        this.module = module;
        this.url = url;
    }
}