import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';

@Component({
    moduleId: module.id,
    selector: 'files',
    templateUrl: 'files.component.html',
    styleUrls: ['files.component.css']
})

export class FilesComponent implements OnInit, Page { 
    title: string = "Files";
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
