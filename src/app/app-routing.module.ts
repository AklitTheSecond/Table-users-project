import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './main/user-info/user-info.component';
import { TableUsersComponent } from './main/table-users/table-users.component';




const routes: Routes = [
  {path:'', component:  TableUsersComponent },
  {path:'userInfo/:userId', component: UserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
