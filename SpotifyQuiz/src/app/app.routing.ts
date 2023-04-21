import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BrowseComponent } from './browse';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'browse', component: BrowseComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const appRoutingModule = RouterModule.forRoot(routes);
