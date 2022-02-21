import { Component, OnInit } from '@angular/core';
import {Champions} from "../champions.model";
import {ChampionsService} from "../champions.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-champions-read-all',
  templateUrl: './champions-read-all.component.html',
  styleUrls: ['./champions-read-all.component.css']
})
export class ChampionsReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'damage', 'tier', 'actions'];

  id_cat: String = '';

  champions: Champions[] = [];

  constructor(private service: ChampionsService, private route: ActivatedRoute, private router: Router ) {
  }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByRole(this.id_cat).subscribe((resposta) => {
      this.champions = resposta;
      console.log(this.champions)
    });
  }
  navegarParaCriarChamp(): void{
    this.router.navigate([`roles/${this.id_cat}/champions/create`])
  }

}
