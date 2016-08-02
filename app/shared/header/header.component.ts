import { Component, Input, ViewChild } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { SubNavigationComponent } from '../sub-navigation/sub-navigation.component';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    directives: [NavigationComponent, SubNavigationComponent]
})

export class HeaderComponent { 
    title: string = "undefined";

    @ViewChild(NavigationComponent)
    private navigationComponent: NavigationComponent;

    @ViewChild(SubNavigationComponent)
    private subNavigationComponent: SubNavigationComponent;

    setTitle(title: string) : void {
        this.title = title;
    }

    getNavigation(): NavigationComponent {
        return this.navigationComponent;
    }

    getSubNavigation(): SubNavigationComponent {
        return this.subNavigationComponent;
    }
}
