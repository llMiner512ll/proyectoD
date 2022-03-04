import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string; //https://ionic.io/ionicons
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
componentes: Componente[]=[
  {
    icon: 'alert-circle-outline',
    name: 'Alerta',
    redirectTo: '/alerta',
  },
  {
    icon: 'accessibility',
    name: 'Acción',
    redirectTo: '/accion',
  },
  {
    icon: 'person',
    name: 'Avatar',
    redirectTo: '/avatar',
  },
  {
    icon: 'beer',
    name: 'Botones',
    redirectTo: '/botones',
  },
  {
    icon: 'ticket',
    name: 'Tarjetas',
    redirectTo: '/card',
  }
];
  constructor() { }

  ngOnInit() {
  }

}
