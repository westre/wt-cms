import { Injectable, Type } from '@angular/core';
import { WebPage } from './web-page.entity';

@Injectable()
export class WebPageService {
    getWebPages(): WebPage[] {
        return [
            new WebPage("DashboardComponent"),
            new WebPage("DashboardComponent2"),
            new WebPage("DashboardComponent3"),
            new WebPage("DashboardComponent4"),
        ]
    }
}