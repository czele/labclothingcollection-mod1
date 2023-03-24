import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-colecao-cadastrar',
  templateUrl: './colecao-cadastrar.component.html',
  styleUrls: ['./colecao-cadastrar.component.css']
})
export class ColecaoCadastrarComponent implements OnInit{

  formCadastrarColecao!: FormGroup;
  id: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private formColecao: FormBuilder,
    private _service: ColecaoService,
    private route: ActivatedRoute,
    private navegar: Router) {}
  
  ngOnInit() {
    this.formCadastrarColecao = this.formColecao.group({
      nome: ['', [Validators.required]],
      estacao: ['', [Validators.required]],
      lancamento: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      orcamento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    if(this.formCadastrarColecao.valid) {
      this._service.cadastrar(this.formCadastrarColecao.value).subscribe(() => this.voltar());
    }
  }

  excluirColecao(id: number) {
    this._service.excluir(id).subscribe(item => this.voltar());
  }

  voltar() {
    // if(this.formCadastrarColecao.valid) {
    //   this.navegar.navigateByUrl("/home/colecao")
    // }
    this.navegar.navigateByUrl("/home/colecao")
  }
}
