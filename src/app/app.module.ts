import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';;
import { ComponentsModule } from './component.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        ComponentsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}