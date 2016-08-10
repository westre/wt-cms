import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { ToastOptions } from 'ng2-toastr/ng2-toastr';

// Bootstrap app with configured routes
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,

    provide(ToastOptions, {
        useValue: new ToastOptions({
            positionClass: 'toast-bottom-right',
        })
    })
]).catch(err => console.error(err));