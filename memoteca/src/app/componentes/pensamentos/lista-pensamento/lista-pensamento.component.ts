import { Component, Input, OnInit } from '@angular/core';
import { pensamento } from '../Interface/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.css']
})
export class ListaPensamentoComponent implements OnInit {

  ListaPensamento:pensamento[] =  [];
  paginaAtual:number = 1;
  haMaisPensamentos: boolean = true;
  filter: string = '';
  favorito: boolean = false;
  listaFavoritos: pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor( private service: PensamentoService , private router: Router ) { }

   ngOnInit(): void {
    this.service.listar(this.paginaAtual,this.filter,this.favorito).subscribe((ListaPensamento) => {
      this.ListaPensamento = ListaPensamento;
    });
  }

  carregarMaisPensamento() {
    this.service.listar(++this.paginaAtual,this.filter,this.favorito).subscribe((ListaPensamento) => {
      this.ListaPensamento.push(...ListaPensamento);
      if(!ListaPensamento.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  recarregarComponente() {
    this.favorito = false;
    this.paginaAtual = 1;
    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  pesquisarPensamentos() {
    this.titulo = 'Meus Favoritos'
    this.haMaisPensamentos = true;
    this.favorito = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual,this.filter,this.favorito).subscribe((ListaPensamento) => {
      this.ListaPensamento = ListaPensamento;
      this.listaFavoritos = ListaPensamento;
    })
  }

}
