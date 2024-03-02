import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      conteudo: ['', Validators.compose([Validators.required,Validators.pattern(/(.|\s)*\S(.|\s)*/)]) ],
      autoria: ['', Validators.compose([Validators.required,Validators.minLength(3),this.apenasLetrasMinusculas])],
      modelo: ['modelo1'],
      favorito: [false]
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

 apenasLetrasMinusculas(control: AbstractControl) {
    const autoria = control.value as string;
    if(autoria !== autoria?.toLowerCase()){
      return { minusculo: true };
    }else {
      return null;
    }
  }


}
