import { Component, OnInit } from '@angular/core';
import { PageService } from '../../shared/page/page.service';
import { ModuleService } from '../../shared/module/module.service';
import { Page } from '../../shared/page/page.interface';
import { Module } from '../../shared/module/module.entity';
import { SubNavigation } from '../../shared/sub-navigation/subnavigation.entity';

import { CKEditor } from 'ng2-ckeditor';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    moduleId: module.id,
    selector: 'pages',
    templateUrl: 'pages.component.html',
    styleUrls: ['pages.component.css'],
    directives: [CKEditor, Dragula],
    viewProviders: [DragulaService],
    providers: [ToastsManager]
})

export class PagesComponent extends Module implements OnInit, Page { 
    title: string = "Paginabeheer";
    pages: SubNavigation[] = [
        new SubNavigation("overview", "Paginaoverzicht"),
        new SubNavigation("add", "Nieuwe pagina toevoegen")
    ];

    content: string = "Hello world!";

    constructor(private pageService: PageService, private moduleService: ModuleService, private dragulaService: DragulaService, private toastrService: ToastsManager) {
        super(moduleService.getModule("PagesComponent"));

        dragulaService.drop.subscribe((value) => {
            this.onDrop(value.slice(1));
        });
    }

    private onDrop(args) {
        console.log(args);
        this.toastrService.success("Pagina succesvol van volgorde veranderd", "Succes");
    }

    ngOnInit() {
        this.pageService.currentPage(this);
    }
}
