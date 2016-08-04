import { SystemModule } from './system-module.entity';

export class Module {
    name: string;
    version: string;
    image: string;

    // god this stupid constructor overloading...
    constructor(nameOrSystemModule?: string | SystemModule, version?: string, image?: string) {
        if (typeof nameOrSystemModule === "object") {
            this.name = nameOrSystemModule.name;
            this.version = nameOrSystemModule.version;
            this.image = nameOrSystemModule.image;
        } 
        else if (typeof nameOrSystemModule === "string") {
            this.name = nameOrSystemModule;
            this.version = version;
            this.image = image;
        }  
    }

    protected initialize(systemModule: SystemModule): void {
        this.name = systemModule.name;
        this.version = systemModule.version;
        this.image = systemModule.image;
    }
}