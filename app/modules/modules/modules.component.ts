import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

@Component({
    moduleId: module.id,
    selector: 'modules',
    templateUrl: 'modules.component.html',
    styleUrls: ['modules.component.css']
})

export class ModulesComponent implements OnInit, Page { 
    title: string = "modules";
    pages: SubNavigation[] = [
        new SubNavigation("index", "Index"),
        new SubNavigation("info", "Informatie")
    ];

    constructor(private pageService: PageService) {

    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
