import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { ModuleService } from '../../shared/module/module.service';
import { Page } from '../../shared/page/page.interface';
import { Module } from '../../shared/module/module.entity';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

import { CKEditor } from 'ng2-ckeditor';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { WebPage } from './web-page.entity';

@Component({
    moduleId: module.id,
    selector: 'pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css'],
    directives: [CKEditor, Dragula],
    viewProviders: [DragulaService]
})

export class PagesComponent extends Module implements OnInit, Page { 
    title: string = "Paginabeheer";
    pages: SubNavigation[] = [
        new SubNavigation("pages/", "Paginaoverzicht", true),
        new SubNavigation("pages/add", "Pagina toevoegen", false)
    ];

    webPages: WebPage[] = [
        new WebPage("w1"),
        new WebPage("w2"),
        new WebPage("w3"),
        new WebPage("w4"),
    ];

    constructor(private pageService: PageService, private moduleService: ModuleService, private dragulaService: DragulaService, private toastrService: ToastsManager) {
        super(moduleService.getModule("PagesComponent"));

        // test
        this.webPages[1].isHomePage = true;

        dragulaService.drop.subscribe((value) => {
            this.onDrop(value.slice(1));
        });
    }

    private onDrop(args) {
        let [e, el] = args;
        console.log(e.id);

        let webPage: WebPage = this.webPages[e.id];

        this.toastrService.success("Pagina succesvol van volgorde veranderd", webPage.title);
    }


    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
