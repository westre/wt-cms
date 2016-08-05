import { Component, OnInit, Input } from '@angular/core';
import { SubModule } from '../../../../shared/module/submodule.entity';
import { DashboardComponent } from '../../dashboard.component';
import { ModuleService } from '../../../../shared/module/module.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard-generic',
    templateUrl: 'dashboard-generic.component.html',
    styleUrls: ['dashboard-generic.component.css']
})

export class DashboardGenericComponent extends SubModule implements OnInit { 
    @Input() 
    value: number;

    @Input()
    message: string;
    
    constructor(private moduleService: ModuleService) {
        super("DashboardGenericComponent", "v0.1", "null", moduleService.getModule("DashboardComponent"));
    }

    ngOnInit() {
        
    }
}
