import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { ModuleService } from '../../shared/module/module.service';
import { Page } from '../../shared/page/page.interface';
import { Module } from '../../shared/module/module.entity';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

import { DashboardNewsComponent } from './submodules/news/dashboard-news.component';
import { DashboardClockComponent } from './submodules/clock/dashboard-clock.component';
import { DashboardGenericComponent } from './submodules/generic/dashboard-generic.component';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    directives: [DashboardNewsComponent, DashboardClockComponent, DashboardGenericComponent]
})

export class DashboardComponent extends Module implements OnInit, Page { 
    title: string = "Dashboard";
    pages: SubNavigation[] = [
        new SubNavigation("index", "Index", true),
        new SubNavigation("info", "Informatie", false)
    ];

    constructor(private pageService: PageService, private moduleService: ModuleService) {
        super(moduleService.getModule("DashboardComponent"));
    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
