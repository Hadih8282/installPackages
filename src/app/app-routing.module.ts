import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientsComponent } from './clients/clients.component';
import { HomesComponent } from './homes/homes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: HomesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserComponent},
  { path: 'admin', component: AdminComponent} ,
  { path: 'client', component: ClientsComponent},
  { path: 'not-fount', component: NotfoundComponent},
  { path: '**', redirectTo: 'not-fount'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
