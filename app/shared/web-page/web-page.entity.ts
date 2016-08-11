export class WebPage {
    title: string;
    rows: number;
    columns: number;
    position: WebPage;
    homePage: boolean;

    constructor(title: string) {
        this.title = title;
    }

    set isHomePage(bool: boolean){
        this.homePage = bool;
    }

    get isHomePage(): boolean {
        return this.homePage;
    }
}