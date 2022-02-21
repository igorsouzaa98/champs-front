import { Component, OnInit } from '@angular/core';
import {ChampionsService} from "../champions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Champions} from "../champions.model";

@Component({
  selector: 'app-champions-delete',
  templateUrl: './champions-delete.component.html',
  styleUrls: ['./champions-delete.component.css']
})
export class ChampionsDeleteComponent implements OnInit {

  id_cat: String ='';
  champions:Champions ={
    id:'',
    nome:'',
    damage: '',
    tier: ''
  }

  constructor(private service: ChampionsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.champions.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void{
    this.service.findById(this.champions.id!).subscribe((resposta)=>{
      this.champions = resposta
    })
  }

  cancel(){
    this.router.navigate([`roles/${this.id_cat}/champions`]);
  }
  delete():void{
    this.service.delete(this.champions.id!).subscribe(() =>{
      this.router.navigate([`roles/${this.id_cat}/champions`]);
      this.service.mensagem("Campeão deletado com sucesso!")
    }, err => {
      this.router.navigate([`roles/${this.id_cat}/champions`]);
      this.service.mensagem("Erro ao deletar campeão!")
        }
    )
  }
}
