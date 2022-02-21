import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from "@angular/forms";
import {ChampionsService} from "../champions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Champions} from "../champions.model";

@Component({
  selector: 'app-champions-update',
  templateUrl: './champions-update.component.html',
  styleUrls: ['./champions-update.component.css']
})
export class ChampionsUpdateComponent implements OnInit {

  id_cat: String ='';
  champions:Champions ={
    id:'',
    nome:'',
    damage: '',
    tier: ''
  }
  nome = new FormControl('', [Validators.minLength(3)])
  damage = new FormControl('', [Validators.minLength(2)])
  tier = new FormControl('', [Validators.minLength(1)])
  constructor(private service: ChampionsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.champions.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }
  cancel(){
    this.router.navigate([`roles/${this.id_cat}/champions`]);
  }

  findById():void{
    this.service.findById(this.champions.id!).subscribe((resposta)=>{
      this.champions = resposta
    })
  }

  update(): void{
    this.service.update(this.champions).subscribe((resposta)  =>{
          this.router.navigate([`roles/${this.id_cat}/champions`]);
          this.service.mensagem("Campeão atualizado com sucesso!")
        }, err => {
          this.router.navigate([`roles/${this.id_cat}/champions`]);
          this.service.mensagem("Falha ao atualizar campeão!")
        }
    )
  }
  getMessage(){
    if(this.nome.invalid){
      return 'O Campo NOME deve conter pelo menos 3 caracteres';
    }
    return false;
  }

  getMessage2(){
    if(this.damage.invalid){
      return 'O Campo DAMAGE deve conter pelo menos 2 caracteres';
    }
    return false;
  }
  getMessage3(){
    if(this.tier.invalid){
      return 'O Campo TIER deve conter pelo menos 1 caracteres';
    }
    return false;
  }
}

