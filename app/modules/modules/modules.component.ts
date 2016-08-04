import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';

@Component({
    moduleId: module.id,
    selector: 'modules',
    templateUrl: 'modules.component.html',
    styleUrls: ['modules.component.css']
})

export class ModulesComponent implements OnInit, Page { 
    title: string = "modules";
    pages: string[] = [
        "page1",
        "page2"
    ];

    constructor(private pageService: PageService) {

    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
