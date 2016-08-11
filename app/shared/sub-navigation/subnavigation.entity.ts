export class SubNavigation {
    key: string;
    display: string;
    active: boolean;

    constructor(key: string, display: string, active: boolean) {
        this.key = key;
        this.display = display;
        this.active = active;
    }

    getDisplayName() {
        return this.display;
    }

    get isActive() {
        return this.active;
    }
}