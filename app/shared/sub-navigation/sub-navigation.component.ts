import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sub-navigation',
    templateUrl: 'sub-navigation.component.html',
    styleUrls: ['sub-navigation.component.css'],
})

export class SubNavigationComponent { 
    pages: string[] = [];

    setPages(pages: string[]) : void {
        this.pages = pages;
    }
}
