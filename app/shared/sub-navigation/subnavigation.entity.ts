export class SubNavigation {
    key: string;
    display: string;

    constructor(key: string, display: string) {
        this.key = key;
        this.display = display;
    }

    getDisplayName() {
        return this.display;
    }
}