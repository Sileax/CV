import {Component, AfterViewInit} from '@angular/core';

@Component({selector: 'app-navbar', template: `
    <navbar SideClass="navbar navbar-toggleable-md navbar-dark bg-primary fixed-top">
      <logo><a class="logo navbar-brand" href="#">Valerian Crasnier</a></logo>
      <links>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" scrollTo href="#profile">Profil<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" scrollTo href="#studies">Etudes</a>
            </li>
            <li class="nav-item">
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
