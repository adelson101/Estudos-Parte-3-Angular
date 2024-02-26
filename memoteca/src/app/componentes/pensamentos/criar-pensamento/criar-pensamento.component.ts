import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { pensamento } from '../Interface/pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoService,private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe( () => this.router.navigate(['/listarPensamento']));
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento'])
  }


}
