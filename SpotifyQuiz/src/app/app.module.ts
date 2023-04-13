import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { BrowseComponent } from './browse/browse.component';

/* HTTP Request */
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        appRoutingModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatSidenavModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideDatabase(() => getDatabase()),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BrowseComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };