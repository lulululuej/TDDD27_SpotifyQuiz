import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingModule } from './app.routing';
import { AppComponent, hide_show_buttons } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BrowseComponent } from './browse';
import { CreateRoomDialogComponent } from './browse';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { environment } from '../environments/environment';

/* Firebase */
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { getAuth, createUserWithEmailAndPassword } from "@angular/fire/auth";

import {MatDialogModule} from '@angular/material/dialog';


/* HTTP Request */
import { HttpClientModule } from '@angular/common/http';
import { RoomComponent } from './room/room.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        appRoutingModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatSidenavModule,
        HttpClientModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideDatabase(() => getDatabase()),
        HttpClientModule,
        MatDialogModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        BrowseComponent,
        CreateRoomDialogComponent,
        RoomComponent
    ],
    bootstrap: [AppComponent],
    providers: [hide_show_buttons]
})
export class AppModule { };