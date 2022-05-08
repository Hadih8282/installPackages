import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrowComponent } from './arrow/arrow.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { PostComponent } from './post/post.component';
import { HomesComponent } from './homes/homes.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { ClientsComponent } from './clients/clients.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { AppErrorHandler } from './common/app- error-handler';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: HomesComponent},
//   { path: 'users', component: UsersComponent},
//   { path: 'admin', component: AdminComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    ArrowComponent,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    PostComponent,
    HomesComponent,
    UsersComponent,
    AdminComponent,
    ClientsComponent,
    NotfoundComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    // RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
