import { Component, Input, OnInit } from '@angular/core';
import { pensamento } from '../Interface/pensamento';
import { PensamentoService } from '../pensamento.service';

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

  constructor( private service: PensamentoService ) { }

   ngOnInit(): void {
    this.service.listar(this.paginaAtual,this.filter).subscribe((ListaPensamento) => {
      this.ListaPensamento = ListaPensamento;
    });
  }

  carregarMaisPensamento() {
    this.service.listar(++this.paginaAtual,this.filter).subscribe((ListaPensamento) => {
      this.ListaPensamento.push(...ListaPensamento);
      if(!ListaPensamento.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual,this.filter).subscribe((ListaPensamento) => {
      this.ListaPensamento = ListaPensamento;
    })
  }

}
