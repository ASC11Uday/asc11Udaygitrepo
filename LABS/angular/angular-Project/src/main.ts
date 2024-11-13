import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddEmpDelComponent } from './app/add-emp-del/add-emp-del.component';

bootstrapApplication(AddEmpDelComponent, appConfig)
  .catch((err) => console.error(err));
