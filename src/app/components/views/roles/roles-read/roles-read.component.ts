import { Component, OnInit } from '@angular/core';
import {RolesService} from "../roles.service";
import {Roles} from "../roles.model";

@Component({
  selector: 'app-roles-read',
  templateUrl: './roles-read.component.html',
  styleUrls: ['./roles-read.component.css']
})
export class RolesReadComponent implements OnInit {

  roles:Roles[] =[]

  displayedColumns: string[] = ['id', 'nome', 'actions'];
  row: any;
  constructor(private service: RolesService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.roles = resposta;
    })
  }
}
