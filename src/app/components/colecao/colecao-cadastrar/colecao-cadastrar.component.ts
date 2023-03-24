import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute) {}
  
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
      this._service.cadastrar(this.formCadastrarColecao.value).subscribe();
    }
  }

}
