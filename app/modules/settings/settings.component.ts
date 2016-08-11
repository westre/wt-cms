import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

@Component({
    moduleId: module.id,
    selector: 'settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css']
})

export class SettingsComponent implements OnInit, Page { 
    title: string = "settings";
    pages: SubNavigation[] = [
        new SubNavigation("index", "Index", true),
        new SubNavigation("info", "Informatie", false)
    ];

    constructor(private pageService: PageService) {

    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
