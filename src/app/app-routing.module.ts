import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/views/home/home.component";
import {RolesReadComponent} from "./components/views/roles/roles-read/roles-read.component";
import {ChampionsReadAllComponent} from "./components/views/champions/champions-read-all/champions-read-all.component";
import {ChampionCreateComponent} from "./components/views/champions/champion-create/champion-create.component";
import {ChampionsUpdateComponent} from "./components/views/champions/champions-update/champions-update.component";
import {ChampionsDeleteComponent} from "./components/views/champions/champions-delete/champions-delete.component";

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
  },
  {
    path: 'roles/:id_cat/champions/create',
    component:ChampionCreateComponent
  },
  {
    path: 'roles/:id_cat/champions/:id/update',
    component: ChampionsUpdateComponent
  },
  {
    path: 'roles/:id_cat/champions/:id/delete',
    component: ChampionsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
