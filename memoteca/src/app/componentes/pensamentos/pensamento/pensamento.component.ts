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
    id: '',
    conteudo: '',
    autoria: '' ,
    modelo: '',
    favorito: false
  }

  @Input()
  public listaFavoritos: pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length>=256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if(!this.pensamento.favorito) {
      return 'favorito-inativo';
    }else {
      return 'favorito';
    }
  }

  favoritar(): void {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice( this.listaFavoritos.indexOf( this.pensamento ), 1 );
    });
  }

}
