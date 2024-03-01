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

  constructor( private service: PensamentoService ) { }

   ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((ListaPensamento) => {
      this.ListaPensamento = ListaPensamento;
    });
  }

  carregarMaisPensamento() {
    this.service.listar(++this.paginaAtual).subscribe(listaPensamento => {
      this.ListaPensamento.push(...listaPensamento);
      if(!listaPensamento.length){
        this.haMaisPensamentos = false;
      }
    })
  }

}
