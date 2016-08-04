import { SystemModule } from './system-module.entity';

export class Module {
    name: string;
    version: string;
    image: string;

    // god this stupid constructor overloading...
    constructor(nameOrSystemModule?: string | SystemModule, version?: string, image?: string) {
        if (typeof nameOrSystemModule === "object") {
            this.name = nameOrSystemModule.module.name;
            this.version = nameOrSystemModule.module.version;
            this.image = nameOrSystemModule.module.image;
        } 
        else if (typeof nameOrSystemModule === "string") {
            this.name = nameOrSystemModule;
            this.version = version;
            this.image = image;
        }  
    }

    protected initialize(systemModule: SystemModule): void {
        this.name = systemModule.module.name;
        this.version = systemModule.module.version;
        this.image = systemModule.module.image;
    }
}