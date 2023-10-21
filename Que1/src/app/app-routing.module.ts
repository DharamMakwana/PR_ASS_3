import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './components/basics/basics.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'UserForm',
    component: UsersComponent,
  },
  {
    path: 'Basics',
    component: BasicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
