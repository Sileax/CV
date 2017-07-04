import { Component, AfterContentChecked, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements AfterContentChecked {

  @ViewChild('mainSection') _el: ElementRef;
  height: number;

  constructor() {
  }

  ngAfterContentChecked() {
    this.height = this._el.nativeElement.offsetHeight;
  }

}
