import {Component, AfterViewInit} from '@angular/core';

@Component({selector: 'app-navbar', template: `
    <navbar SideClass="navbar navbar-toggleable-md navbar-dark default-color fixed-top">
      <logo><a class="logo navbar-brand" href="#">Valerian Crasnier</a></logo>
      <links>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active hover-dash">
                <a class="nav-link" scrollTo href="#profile">Profil<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item hover-dash">
                <a class="nav-link" scrollTo href="#studies">Etudes</a>
            </li>
            <li class="nav-item hover-dash">
                <a class="nav-link">Competences</a>
            </li>
        </ul>
      </links>
    </navbar>
  `,
  styleUrls: ['./navbar.component.scss']})
export class NavbarComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {}

}
