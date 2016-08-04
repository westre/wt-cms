import { Component, OnInit, Input } from '@angular/core';
import { SubModule } from '../../../../shared/module/submodule.entity';
import { DashboardComponent } from '../../dashboard.component';
import { ModuleService } from '../../../../shared/module/module.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard-news',
    templateUrl: 'dashboard-news.component.html',
    styleUrls: ['dashboard-news.component.css']
})

export class DashboardNewsComponent extends SubModule implements OnInit { 
    
    constructor(private moduleService: ModuleService) {
        super("DashboardNewsComponent", "v0.1", "null", moduleService.getModule("DashboardComponent"));
    }

    ngOnInit() {
        console.log("Beep, boop!");
        console.log("My parent is: " + this.parentModule.name);
    }
}
