import { Component } from '@angular/core';

interface Personas {
  classe: string;
  descricao: string;
  favoritado?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Click';
  email = 'elucasfelinto@gmail.com';
  campos = {
    nome: '',
    raca: '',
    classe: '',
    numero: '',
    telefone: '',
  };
  personas: Array<Personas> = [
    {
      classe: 'Bárbaro',
      descricao:
        'A fierce warrior of primitive background who can enter a battle rage',
      favoritado: true,
    },
    {
      classe: 'Bardo',
      descricao:
        'An inspiring magician whose power echoes the music of creation',
      favoritado: true,
    },
    {
      classe: 'Paladino',
      descricao: 'A holy warrior bound to a sacred oath',
      favoritado: true,
    },
    {
      classe: 'Mago',
      descricao:
        'A scholarly magic-user capable of manipulating the structures of reality',
      favoritado: true,
    },
    {
      classe: 'Druída',
      descricao:
        'A priest of the Old Faith, wielding the powers of nature and adopting animal forms',
      favoritado: true,
    },
  ];

  private _isActive = true;

  set isAcetive(isActive) {
    this._isActive = isActive;
  }
  get isActive() {
    return this._isActive;
  }
  click(index) {
    this.personas[index].favoritado = !this.personas[index].favoritado;
    // console.log(this.personas[index].favoritado);
  }

  getValue(value: string, campo) {
    this.campos[campo] = value;
  }

  save(event) {
    event.preventDefault();
  }
}
