import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Page } from './page.interface';

@Injectable()
export class PageService {
    // Observable string sources
    private pageChangedSource = new Subject<Page>();

    // Observable string streams
    pageChanged$ = this.pageChangedSource.asObservable();

    // Service message commands
    currentPage(page: Page) {
        this.pageChangedSource.next(page);
    }
}
