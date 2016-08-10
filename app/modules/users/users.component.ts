import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { Page } from '../../shared/page/page.interface';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit, Page { 
    title: string = "users";
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
