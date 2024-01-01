import { AppComponent } from './app/components/app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
    ]
}

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
