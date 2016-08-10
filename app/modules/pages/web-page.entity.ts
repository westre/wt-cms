export class WebPage {
    title: string;
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