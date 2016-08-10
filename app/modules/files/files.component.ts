import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

@Component({
    moduleId: module.id,
    selector: 'files',
    templateUrl: 'files.component.html',
    styleUrls: ['files.component.css']
})

export class FilesComponent implements OnInit, Page { 
    title: string = "Files";
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
