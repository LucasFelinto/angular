import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appField]',
})
export class FieldDirective implements OnInit {
  constructor(private campo: ElementRef) {}

  ngOnInit() {
    console.log(this.campo);
    const element = this.campo.nativeElement;
    if (element.name === '') {
      throw new Error('deu xabu');
    } else {
      element.setAttribute('placeholder', `${element.name}`);
    }
  }
}
