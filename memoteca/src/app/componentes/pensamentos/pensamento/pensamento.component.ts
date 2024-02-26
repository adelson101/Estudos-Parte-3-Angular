import { Component, Input, OnInit } from '@angular/core';
import { pensamento } from '../Interface/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input()
  public pensamento:pensamento = {
    id: 0,
    conteudo: '',
    autoria: '' ,
    modelo: ''
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length>=256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  excluir() {
    this.service.excluir(this.pensamento.id:string).subscribe();
  }

}
