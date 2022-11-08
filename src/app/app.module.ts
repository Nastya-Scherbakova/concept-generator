import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbSelectModule, NbAccordionModule, NbCardModule, NbInputModule, NbIconModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { JsonReaderService } from './services/json-reader.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SafePipe } from './pipes/safe.pipe';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(/*{ name: 'dark' }*/),
    NbLayoutModule,
    NbToastrModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    NbAccordionModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
  ],
  providers: [JsonReaderService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
