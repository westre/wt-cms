import { Component, Input } from '@angular/core';
import { SubNavigation } from './subnavigation.entity'

@Component({
    moduleId: module.id,
    selector: 'sub-navigation',
    templateUrl: 'sub-navigation.component.html',
    styleUrls: ['sub-navigation.component.css'],
})

export class SubNavigationComponent { 
    pages: SubNavigation[] = [];

    setPages(pages: SubNavigation[]): void {
        this.pages = pages;
    }
}
