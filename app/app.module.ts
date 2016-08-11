import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}