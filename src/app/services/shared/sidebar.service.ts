import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  // menu: any = [
  //   {
  //     titulo: 'Pricipal',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       { titulo: 'Dashboard', url: '/dashboard'},
  //       { titulo: 'ProgressBard', url: '/progress'},
  //       { titulo: 'Graficas', url: '/graficas1'},
  //       { titulo: 'Promesas', url: '/promesas'},
  //       { titulo: 'Rxjs', url: '/rxjs'}
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimientos',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { titulo: 'Usuarios', url: '/usuarios'},
  //       { titulo: 'Hospitales', url: '/hospitales'},
  //       { titulo: 'Medicos', url: '/medicos'}
  //     ]
  //   }
  // ];

  constructor(
    public _usuarioService: UsuarioService
  ) {}
  
  cargarMenu() {
    this.menu  = this._usuarioService.menu;
  }
}
