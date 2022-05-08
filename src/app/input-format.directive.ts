import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  //////////////////////////////////////////////
  // (1)

  // @HostListener('focus') onFocus() {
  //   console.log("on Focus");
  // }

  // @HostListener('blur') onBlur() {
  //   console.log("on Blur");
  // }

  // constructor() { }

  //////////////////////////////////////////////
  // (2)

  // constructor(private el: ElementRef) {}

  // @HostListener('blur') onBlur() {
  //   let value: string = this.el.nativeElement.value;
  //   this.el.nativeElement.value = value.toLowerCase();
  // } 
  
  /////////////////////////////////////////////////
  // (3)

  // @Input('format') format: any;

  // constructor(private el: ElementRef) {}

  // @HostListener('blur') onBlur() {
  //   let value: string = this.el.nativeElement.value;

  //   if (this.format =='lowercase')
  //     this.el.nativeElement.value = value.toLowerCase();
  //   else
  //     this.el.nativeElement.value = value.toUpperCase();  
  // }

  /////////////////////////////////////////////////
  // (4)

  // @Input('appInputFormat') format: any;

  // constructor(private el: ElementRef) {}

  // @HostListener('blur') onBlur() {
  //   let value: string = this.el.nativeElement.value;

  //   if (this.format =='lowercase')
  //     this.el.nativeElement.value = value.toLowerCase();
  //   else
  //     this.el.nativeElement.value = value.toUpperCase();  
  // }

}
