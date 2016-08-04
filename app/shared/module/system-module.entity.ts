import { Module } from './module.entity';

export class SystemModule extends Module {
    component: string;
    url: string;

    constructor(component: string, module: Module, url: string) {
        super(module.name, module.version, module.image);
        
        this.component = component;
        this.url = url;
    }
}