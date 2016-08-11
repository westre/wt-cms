import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';
import { ToastOptions } from 'ng2-toastr/ng2-toastr';

var modules = [
    {
        provide: ToastOptions,
        useValue: new ToastOptions({
            positionClass: 'toast-bottom-right',
        })
    }
];

platformBrowserDynamic().bootstrapModule(AppModule);