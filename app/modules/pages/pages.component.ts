import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { ModuleService } from '../../shared/module/module.service';
import { Page } from '../../shared/page/page.interface';
import { Module } from '../../shared/module/module.entity';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

@Component({
    moduleId: module.id,
    selector: 'pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css']
})

export class PagesComponent extends Module implements OnInit, Page { 
    title: string = "Paginabeheer";
    pages: SubNavigation[] = [
        new SubNavigation("overview", "Paginaoverzicht"),
        new SubNavigation("add", "Nieuwe pagina toevoegen")
    ];

    constructor(private pageService: PageService, private moduleService: ModuleService) {
        super(moduleService.getModule("PagesComponent"));
    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
