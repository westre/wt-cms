import { Module } from './module.entity';

export class SubModule extends Module {
    parentModule: Module;

    constructor(name: string, version: string, image: string, parentModule: Module) {
        super(name, version, image);

        this.parentModule = parentModule;
    }
}