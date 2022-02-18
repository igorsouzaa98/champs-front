import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {RolesReadComponent} from "./components/views/roles/roles-read/roles-read.component";
import {ChampionsReadAllComponent} from "./components/views/champions/champions-read-all/champions-read-all.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'roles',
    component:RolesReadComponent
  },
  {
    path: 'roles/:id_cat/champions',
    component:ChampionsReadAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
