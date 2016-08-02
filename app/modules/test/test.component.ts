import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class TestComponent implements OnInit { 
    title: string = "Dashboard";

    ngOnInit() {
        this.title = "meh";
        console.log("Nesdsdee");
    }
}