import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective  implements OnChanges{

  // _defaultColor: string = "dark";
  @Input('LightBox') _hightLightColor: string = "gray";

  constructor (private _elementRef: ElementRef) {


  }
  ngOnChanges(): void {
    this._elementRef.nativeElement.style.border = '2px darkblue';
  }

  @HostListener('mouseover') onMouseHover() {
    this._elementRef.nativeElement.style.border = `2px outset ${this._hightLightColor}`

    this._elementRef.nativeElement.style.padding = 5;
    this._elementRef.nativeElement.style.boxshadow= '6px 10px 10px -2px';
  }

  @HostListener('mouseout') onMouseOut() {
    this._elementRef.nativeElement.style.border = '2px none white'
  }


}


