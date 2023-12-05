import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';


const appConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(),
        provideClientHydration(),
        provideRouter(routes),
    ]
}

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
