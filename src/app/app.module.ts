import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableUsersService } from './main/table-users/table-users.service';
import { UserInfoComponent } from './main/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TableUsersComponent } from './main/table-users/table-users.component';
import { PaginationComponent } from './main/table-users/pagination/pagination.component';
import { TableSelectBoxComponent } from './main/table-users/table-select-box/table-select-box.component';
import { TableSearchComponent } from './main/table-users/table-search/table-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableUsersComponent,
    UserInfoComponent,
    PaginationComponent,
    TableSelectBoxComponent,
    TableSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TableUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
