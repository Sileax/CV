import {Component, ElementRef, Renderer, AfterViewChecked, HostListener, Inject, ViewChild} from '@angular/core';
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
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fusce id sem finibus enim consequat faucibus in et dui.
                  Fusce varius, nulla ut imperdiet elementum, arcu purus hendrerit leo, vel dignissim arcu nulla a lorem.
                  Maecenas sed metus augue. Aliquam erat volutpat. Ut pharetra quam et sapien ullamcorper maximus.
                  Curabitur lacus nunc, interdum eu velit quis, pharetra tempor dolor. Fusce risus odio, pretium sed neque in, vestibulum luctus elit.
                  Nunc vitae ligula augue. Curabitur a lectus leo. Phasellus fermentum lacus sit amet erat ullamcorper accumsan.
              </p>
              <p>
                Cras tincidunt odio nec risus dapibus, nec consequat arcu suscipit.
                Cras iaculis dui justo, et porttitor augue euismod a. Donec id neque luctus, tempus ipsum vel, ultrices nunc.
                Sed lobortis, lectus ut facilisis ornare, mi erat malesuada magna, vitae semper ligula neque sed urna.
                Vestibulum et nisl vel nisi hendrerit condimentum. In vestibulum est ut porta dapibus. Nullam vitae auctor velit. Aenean convallis placerat pulvinar.
              </p>
              <p>
                Phasellus et varius risus, imperdiet varius mi.
                In faucibus lacus euismod elit pharetra, sed accumsan ante dictum.
                Sed malesuada est est. Nulla tristique ex at ornare viverra.
                Etiam in efficitur magna, ac elementum purus. Ut ac justo tincidunt, convallis ligula quis, rutrum arcu.
                Vestibulum sollicitudin tellus eu orci vehicula suscipit.
                Vestibulum magna enim, ultrices sit amet elit eu, efficitur efficitur leo. Nam ac rutrum risus.
                Etiam id sagittis turpis. Vestibulum rhoncus laoreet nulla, ut dictum enim iaculis non.
                In placerat venenatis luctus. Duis gravida, purus quis fringilla fermentum, lacus mauris sagittis sem, quis lobortis urna nunc id urna.
                Nam ut velit eget nisi sodales elementum id nec metus.
              </p>
            </div>
          </div>
        </div>
      </section>
  `,
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements AfterViewChecked {

  visibility : boolean = true;


  constructor(private _el : ElementRef, private _renderer : Renderer) {
  }

  ngAfterViewChecked() {
  }

}
