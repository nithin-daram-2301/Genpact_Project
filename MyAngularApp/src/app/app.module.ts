import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { ContentMonitorComponent } from './content-monitor/content-monitor.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentFormComponent,
        ContentDisplayComponent,
        ContentMonitorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
