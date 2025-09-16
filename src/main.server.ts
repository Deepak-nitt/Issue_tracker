// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app';

export default bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering()
  ]
});
