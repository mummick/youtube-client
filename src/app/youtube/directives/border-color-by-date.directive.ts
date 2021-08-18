import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColorByDate]',
})
export class BorderColorByDateDirective implements OnInit {
  @Input() appBorderColorByDate?: string;

  getBorderColor(): string {
    if (this.appBorderColorByDate) {
      const msInDay = 86400000;
      const publicationDate = Date.parse(this.appBorderColorByDate);
      const currentDate = Date.parse(new Date().toISOString());
      const dateDiffDays = (currentDate - publicationDate) / msInDay;
      if (dateDiffDays > 365 / 2) {
        return '#EB5757';
      }
      if (dateDiffDays > 30) {
        return '#F2C94C';
      }
      if (dateDiffDays > 7) {
        return '#27AE60';
      }
      return '#2F80ED';
    }
    return '#4f4f4f';
  }

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border-color', this.getBorderColor());
  }
}
