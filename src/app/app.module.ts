import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TilerenameDirective } from './tilerename.directive';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TilerenameDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
