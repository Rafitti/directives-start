import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appmarcador]'
})
export class MarcadorDirective implements OnInit{
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#107eb3';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.fontWeight = 'Bold';
    this.elementRef.nativeElement.style.fontSize = '50px';
  }
}
