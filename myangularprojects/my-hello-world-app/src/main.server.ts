import { bootstrapApplication } from '@angular/platform-browser';
//import { AppComponent } from './app/app.component';
import { MyListComponent } from './app/my-list/my-list/my-list.component';
import { config } from './app/app.config.server';

//const bootstrap = () => bootstrapApplication(AppComponent, config);

const bootstrap = () => bootstrapApplication(MyListComponent, config);

export default bootstrap;
