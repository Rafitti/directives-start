import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMejordirective]'
})
export class MejordirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() colorqueresalta: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
   this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color',
    //   'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //   'background-color',
    //   'red');
    this.backgroundColor = this.colorqueresalta;
  }
}
