import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';

@Component({
    moduleId: module.id,
    selector: 'pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css']
})

export class PagesComponent implements OnInit, Page { 
    title: string = "pages";
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
