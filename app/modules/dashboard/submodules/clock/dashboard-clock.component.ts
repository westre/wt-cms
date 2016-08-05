import { Component, OnInit, Input } from '@angular/core';
import { SubModule } from '../../../../shared/module/submodule.entity';
import { DashboardComponent } from '../../dashboard.component';
import { ModuleService } from '../../../../shared/module/module.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'dashboard-clock',
    templateUrl: 'dashboard-clock.component.html',
    styleUrls: ['dashboard-clock.component.css']
})

export class DashboardClockComponent extends SubModule implements OnInit { 
    image: string;
    state: number;
    time: string;

    constructor(private moduleService: ModuleService) {
        super("DashboardClockComponent", "v0.1", "null", moduleService.getModule("DashboardComponent"));
    }

    ngOnInit() {
        let date = new Date();
        if(date.getHours() >= 6 && date.getHours() < 12) {
            this.image = "assets/images/dawn.jpg";
            this.state = 0;
        }
        else if(date.getHours() >= 12 && date.getHours() < 20) {
            this.image = "assets/images/noon.jpg";
            this.state = 1;
        }
        else {
            this.image = "assets/images/night.jpg";
            this.state = 2;
        }

        let timer = Observable.timer(0, 1000);
        timer.subscribe(t => {
            this.time = new Date(new Date().getTime()).toISOString().split("T")[1].split(".")[0];
        });
    }
}
