import { Modular } from './modular.interface';
import { SystemModule } from './system-module.entity';

export class Module implements Modular {
    name: string;
    version: string;
    image: string;

    constructor(name?: string, version?: string, image?: string) {
        this.name = name;
        this.version = version;
        this.image = image;
    }

    protected initialize(systemModule: SystemModule): void {
        this.name = systemModule.module.name;
        this.version = systemModule.module.version;
        this.image = systemModule.module.image;
    }
}