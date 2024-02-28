import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { pensamento } from '../Interface/pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private service: PensamentoService,private router: Router, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.FormBuilder.group( {
      conteudo: ['', Validators.compose([Validators.required,Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: ['', Validators.compose([Validators.required,Validators.minLength(3)])],
      modelo: ['modelo1']
    });
  }

  criarPensamento(): void {
    if(this.formulario.valid){
    this.service.criar(this.formulario.value).subscribe( () => this.router.navigate(['/listarPensamento']));
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(!this.formulario.valid){
      return 'botao__desabilitado';
    } else {
      return 'botao';
    }
  }


}
