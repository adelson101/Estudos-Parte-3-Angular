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

  constructor( private service: PensamentoService ) { }

   ngOnInit(): void {
    this.service.listar().subscribe((ListaPensamento) => {
      this.ListaPensamento = ListaPensamento;
    });
    
  }

}
