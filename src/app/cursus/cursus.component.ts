import {Component, ElementRef, Renderer, AfterViewChecked, Input, HostListener} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-cursus',
  /*animations: [trigger('visibilityChanged', [transition(':enter', [
        style({transform: 'translateX(-100%)', visibility: 'hidden'}),
        animate('800ms', style({transform: 'translateX(0)', visibility: 'visible'}))
      ])])],*/
  template: `
      <section class="cursus">
        <div class="container-fluid">
          <div class="row col-center" id="studies">
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 wow zoomIn" data-wow-delay="0.2s">
              <div class="row margin-bottom">
                <img src="../../../img/svg/ISTV.svg"/>
              </div>
              <div class="row grey-color">
                <div class="col-12"> 2013 -> 2015 </div>
                <div class="col-12">Diplomé du DEUST Informatique d'organisation et systemes d'informations </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 wow zoomIn" data-wow-delay="0.5s">
              <div class="row margin-bottom">
                <img src="../../../img/svg/ISTV.svg"/>
              </div>
              <div class="row grey-color margin-bottom-xs">
                <div class="col-12"> 2015 -> 2016 </div>
                <div class="col-12">Diplomé de la licence Technologie de l'information et Internet </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 wow zoomIn estiam-margin" data-wow-delay="0.8s">
              <div class="row padding-top-estiam margin-bottom-xs">
                <img src="../../../img/svg/ESTIAM.svg"/>
              </div>
              <div class="row grey-color padding-top-estiam">
                <div class="col-12"> 2016 -> 2018 </div>
                <div class="col-12"> Actuellement en 4ème année a l'école ESTIAM de Tourcoing (Passage en 5ème année validé) </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `,
  styleUrls: ['./cursus.component.scss']
})

export class CursusComponent implements AfterViewChecked {

  visibility : boolean = false;
  position : number = 0;
  @Input() parentHeight = 0;

  constructor(private _el : ElementRef, private _renderer : Renderer) {}

  ngAfterViewChecked() {
    this.position = this._el.nativeElement.offsetTop;
    console.log(this.parentHeight);

  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    if ($event.pageY > this.position + this.parentHeight - window.screen.height / 2) {
      this.visibility = true;
    }
    console.log($event.pageY);

  }

}
