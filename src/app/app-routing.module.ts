import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { OnePostComponent } from './one-post/one-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';


const routes: Routes = [
  {path: 'Header', component: HeaderComponent},
  {path: 'Posts', component: DisplayPostComponent},
  {path: 'view/:id', component:OnePostComponent},
  {path: 'edit/:id', component:UpdatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
