import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { VehiclePopupComponent } from './vehicle-popup/vehicle-popup.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { LoginComponent } from './login/login.component';
import { VehicleListItemComponent } from './vehicle-list-item/vehicle-list-item.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

import { ColorFilter } from './pipes/customFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchComponent,
    ResultsComponent,
    VehiclePopupComponent,
    SignOutComponent,
    LoginComponent,
    VehicleListItemComponent,
    VehicleDetailsComponent,
    ColorFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
