import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HomeComponentComponent } from 'src/components/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from 'src/components/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ReviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [MatIconRegistry ],
  bootstrap: [AppComponent]
})
export class AppModule { }
