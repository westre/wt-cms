import { Injectable, Type } from '@angular/core';
import { Module } from './module.entity';
import { SystemModule } from './system-module.entity';

@Injectable()
export class ModuleService {
    getModules(): SystemModule[] {
        return [
            new SystemModule("DashboardComponent", new Module("Dashboard", "v0.1", "fa-th"), "/dashboard"),
            new SystemModule("PagesComponent",  new Module("Pages", "v0.1", "fa-file-text-o"), "/pages"),
            new SystemModule("FilesComponent", new Module("Files", "v0.1", "fa-files-o"), "/files"),
            new SystemModule("UsersComponent", new Module("Users", "v0.1", "fa-users"), "/users"),
            new SystemModule("ModulesComponent", new Module("Modules", "v0.1", "fa-clone"), "/modules"),
            new SystemModule("SettingsComponent", new Module("Settings", "v0.1", "fa-cog"), "/settings"),
        ]
    }

    getModule(instance: Module | string): SystemModule {
        let systemModules = this.getModules();

        for (let systemModule of systemModules) {
            if(instance instanceof Module && systemModule.component === instance.constructor.name) {
                return systemModule;
            }
            else if(systemModule.component === instance) {
                return systemModule;
            }
        }
        
        return null;
    }
}