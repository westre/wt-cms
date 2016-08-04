import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { Module } from './shared/module/module.entity';
import { ModuleService } from './shared/module/module.service';

import { PageService } from './shared/page/page.service';

@Component({
    moduleId: module.id,
    selector: 'wt-cms',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
    providers: [ModuleService, PageService]
})

export class AppComponent implements OnInit { 
    @ViewChild(HeaderComponent)
    private headerComponent: HeaderComponent;

    constructor(private router: Router, private moduleService: ModuleService, private pageService: PageService) {
        pageService.pageChanged$.subscribe(page => {
            this.headerComponent.setTitle(page.title);
            this.headerComponent.getSubNavigation().setPages(page.pages);
        });
    }

    ngOnInit() {
        let systemModules = this.moduleService.getModules();

        for(let systemModule of systemModules) {
            this.headerComponent.getNavigation().addModule(systemModule);
        }
    }
}
