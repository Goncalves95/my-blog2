import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './my_blog/app.config'; // Corrected import path
import { AppComponent } from './my_blog/app.component'; // Corrected import path

bootstrapApplication(AppComponent, appConfig).catch((err: any) =>
  console.error(err)
);
