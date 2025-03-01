import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;


  constructor(public router: Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    // this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  buscar(termino: string) {
    this.router.navigate(['/busqueda', termino]);
  }

}
