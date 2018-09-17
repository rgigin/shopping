import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductServiceService } from './product-list/product-service.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {DataViewModule} from 'primeng/dataview';
import {HttpModule} from '@angular/http';

import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {PanelModule} from 'primeng/components/panel/panel';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeTextDirective } from './directives/change-text.directive';

@NgModule({
    imports:[BrowserModule, AppRoutingModule,DataViewModule,HttpModule,DropdownModule,PanelModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule
    ], //Dependency Modules
    declarations:[AppComponent, ProductListComponent, HomeComponent, HeaderComponent, ChangeTextDirective], //Declaring Components
    bootstrap:[AppComponent],
    providers:[ProductServiceService] //Root Component
})
export class AppModule{} //Root Module