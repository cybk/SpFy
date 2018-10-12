import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPopularity]'
})
export class PopularityDirective implements AfterViewInit {
  @Input() appPopularity: any;
  constructor(
    private el: ElementRef;
  ) {}

  ngAfterViewInit(): void {
    console.log(this.appPopularity);
    if (this.appPopularity.includes('de')) {
      this.el.nativeElement.className += ' popularity-high';
    }
  }
}
