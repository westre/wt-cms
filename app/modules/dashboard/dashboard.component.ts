import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { ModuleService } from '../../shared/module/module.service';
import { Page } from '../../shared/page/page.interface';
import { Module } from '../../shared/module/module.entity';

import { DashboardNewsComponent } from './submodules/news/dashboard-news.component';
import { DashboardClockComponent } from './submodules/clock/dashboard-clock.component';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    directives: [DashboardNewsComponent, DashboardClockComponent]
})

export class DashboardComponent extends Module implements OnInit, Page { 
    title: string = "Dashboard";
    pages: string[] = [
        "page1",
        "page2"
    ];

    constructor(private pageService: PageService, private moduleService: ModuleService) {
        super(moduleService.getModule("DashboardComponent"));
    }

    ngOnInit() {
        this.title += " - " + this.version;
        this.pageService.currentPage(this);
    }
}
