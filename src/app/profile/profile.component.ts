import {Component, ElementRef, Renderer, AfterViewChecked, HostListener, Input} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {SimplePageScrollConfig, SimplePageScrollService} from 'ng2-simple-page-scroll';


@Component({
  selector: 'app-profile',
  animations: [trigger('visibilityChanged', [transition(':enter', [
        style({transform: 'translateX(100%)', visibility: 'hidden'}),
        animate('800ms', style({transform: 'translateX(0)', visibility: 'visible'}))
      ])])],
  template: `
      <section class="profile">
        <div class="container-fluid" *ngIf="visibility" [@visibilityChanged]>
          <div class="row" id="profile">
            <div class="col-12 text-margin">
                  <div class="text-center intro navbar-color font-weight-bold">Bonjour ! Je m'appelle Valerian et je suis développeur web.</div>

              <p class="light-grey">
                  Plus qu'un metier c'est une passion pour moi, et cela a commencé lors de ma première année d'etude supérieure.
                  J'ai dépuis bien progressé, acquis de l'experience au fil du temps mais le fun est resté intact.
              </p>
              <p class="light-grey">
                  Durant mes années d'étude j'ai pu progresser dans des technologies variées telles que le Javascript, PHP, Java, C/C++, HTML5, CSS/SASS...
                  J'ai choisi de me spécialiser dans les technologies web, plus spécifiquement le developpement front-end.
              </p>
            </div>
          </div>
        </div>
      </section>
  `,
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements AfterViewChecked {

  visibility : boolean = false;
  position : number;
  @Input() parentHeight = 0;


  constructor(private _el : ElementRef, private _renderer : Renderer) {
    this.position = this._el.nativeElement.offsetTop;
    console.log(this.position);
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    if ($event.pageY > this.position + this.parentHeight - window.screen.height / 2) {
      this.visibility = true;
    }
  }

  ngAfterViewChecked() {
  }

}
