import { Component, AfterContentChecked, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements AfterContentChecked {

  height: number;

  constructor(private _el : ElementRef, private _renderer : Renderer) {
   }

  ngAfterContentChecked() {
    this.height = this._el.nativeElement.offsetHeight;
  }

}
