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
    selector: 'add-page',
    templateUrl: 'add-page.component.html',
    styleUrls: ['add-page.component.css'],
    directives: [CKEditor, Dragula],
    viewProviders: [DragulaService],
    providers: [ToastsManager]
})

export class AddPageComponent extends Module implements OnInit, Page { 
    title: string = "Paginabeheer - tt";
    pages: SubNavigation[] = [
        new SubNavigation("pages/", "Paginaoverzicht", false),
        new SubNavigation("pages/add", "Pagina toevoegen", true)
    ];

    constructor(private pageService: PageService, private moduleService: ModuleService, private dragulaService: DragulaService, private toastrService: ToastsManager) {
        super(moduleService.getModule("PagesComponent"));
    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
