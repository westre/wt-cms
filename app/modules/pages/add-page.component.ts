import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { ModuleService } from '../../shared/module/module.service';
import { Page } from '../../shared/page/page.interface';
import { Module } from '../../shared/module/module.entity';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

import { CKEditor } from 'ng2-ckeditor';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { WebPage } from '../../shared/web-page/web-page.entity';
import { WebPageService } from '../../shared/web-page/web-page.service';

@Component({
    moduleId: module.id,
    selector: 'add-page',
    templateUrl: 'add-page.component.html',
    styleUrls: ['add-page.component.css'],
    directives: [CKEditor, Dragula],
    viewProviders: [DragulaService],
    providers: [WebPageService]
})

export class AddPageComponent extends Module implements OnInit, Page { 
    title: string = "Paginabeheer - tt";
    pages: SubNavigation[] = [
        new SubNavigation("pages/", "Paginaoverzicht", false),
        new SubNavigation("pages/add", "Pagina toevoegen", true)
    ];

    webPage: WebPage;
    allWebPages: WebPage[];

    constructor(
    private pageService: PageService, 
    private moduleService: ModuleService, 
    private dragulaService: DragulaService, 
    private toastrService: ToastsManager,
    private webPageService: WebPageService) {

        super(moduleService.getModule("PagesComponent"));

        this.webPage = new WebPage("");
        this.allWebPages = webPageService.getWebPages();
    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }

    get diagnostic() { return JSON.stringify(this.webPage); }
}
