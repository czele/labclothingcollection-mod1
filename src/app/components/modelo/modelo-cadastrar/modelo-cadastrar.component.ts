import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelo-cadastrar',
  templateUrl: './modelo-cadastrar.component.html',
  styleUrls: ['./modelo-cadastrar.component.css']
})
export class ModeloCadastrarComponent {

  formCadastrarModelo!: FormGroup;
  id: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private formModelo: FormBuilder,
    private _service: ModeloService,
    private route: ActivatedRoute,
    private navegar: Router) {}
  
  ngOnInit() {
    this.formCadastrarModelo = this.formModelo.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      colecao: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      bordado: ['', [Validators.required]],
      estampa: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if(this.formCadastrarModelo.valid) {
      this._service.cadastrar(this.formCadastrarModelo.value).subscribe();
    }
  }

  excluirModelo(id: number) {
    this._service.excluir(id).subscribe(item => this.voltar());
  }

  voltar() {
    // if(this.formCadastrarColecao.valid) {
    //   this.navegar.navigateByUrl("/home/colecao")
    // }
    this.navegar.navigateByUrl("/home/modelo")
  }

}
