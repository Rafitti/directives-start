import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMejordirective]'
})
export class MejordirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('MejordirectiveDirective') colorqueresalta: string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color',
    //   'blue');
  }
  @HostListener('mouseleave') m2(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color',
    //   'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseover') mouseover2(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color',
    //   'red');
    this.backgroundColor = this.colorqueresalta;
  }
}
