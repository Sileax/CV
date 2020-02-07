webpackJsonp([2,5],{

/***/ 328:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 328;


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(350);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(593),
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_bootstrap_md___ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_angular2_google_maps_ts_core___ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cursus_cursus_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_scroll_to__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__parallax_parallax_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__skills_skills_component__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//typescript version
// import { MDBBootstrapModule } from './typescripts/angular-bootstrap-md/free';
// import { AgmCoreModule } from './typescripts/angular-bootstrap-md/free/angular2-google-maps/ts/core';
//compiled npm


//compiled local js
// import { MDBBootstrapModule } from './angular-bootstrap-md/free';
// import { AgmCoreModule } from './angular-bootstrap-md/free/angular2-google-maps/ts/core/';







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__cursus_cursus_component__["a" /* CursusComponent */],
            __WEBPACK_IMPORTED_MODULE_13__parallax_parallax_component__["a" /* ParallaxComponent */],
            __WEBPACK_IMPORTED_MODULE_14__skills_skills_component__["a" /* SkillsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_scroll_to__["ScrollToModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angular_bootstrap_md___["a" /* MDBBootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular_bootstrap_md_angular2_google_maps_ts_core___["a" /* AgmCoreModule */].forRoot({
                apiKey: 'you_api_key'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CursusComponent = (function () {
    function CursusComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.visibility = false;
        this.position = 0;
        this.parentHeight = 0;
    }
    CursusComponent.prototype.ngAfterViewChecked = function () {
        console.log(this._el);
        this.position = this._el.nativeElement.offsetTop;
    };
    return CursusComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CursusComponent.prototype, "parentHeight", void 0);
CursusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cursus',
        /*animations: [trigger('visibilityChanged', [transition(':enter', [
              style({transform: 'translateX(-100%)', visibility: 'hidden'}),
              animate('800ms', style({transform: 'translateX(0)', visibility: 'visible'}))
            ])])],*/
        template: "\n      <section class=\"cursus\">\n        <div class=\"container-fluid\">\n          <div class=\"row col-center\" id=\"studies\">\n            <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 wow zoomIn\" data-wow-delay=\"0.2s\">\n              <div class=\"row margin-bottom col-center\">\n                <img src=\"assets/images/ISTV.png\"/>\n              </div>\n              <div class=\"row grey-color\">\n                <div class=\"col-12\"> 2013 -> 2015 </div>\n                <div class=\"col-12\">Diplom\u00E9 du DEUST Informatique d'organisation et systemes d'informations </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 wow zoomIn\" data-wow-delay=\"0.5s\">\n              <div class=\"row margin-bottom col-center\">\n                <img src=\"assets/images/ISTV.png\"/>\n              </div>\n              <div class=\"row grey-color margin-bottom-xs\">\n                <div class=\"col-12\"> 2015 -> 2016 </div>\n                <div class=\"col-12\">Diplom\u00E9 de la licence Technologie de l'information et Internet </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12 wow zoomIn estiam-margin\" data-wow-delay=\"0.8s\">\n              <div class=\"row padding-top-estiam margin-bottom-xs col-center\">\n                <img src=\"assets/images/ESTIAM.png\"/>\n              </div>\n              <div class=\"row grey-color padding-top-estiam\">\n                <div class=\"col-12\"> 2016 -> 2018 </div>\n                <div class=\"col-12\"> Actuellement en 4\u00E8me ann\u00E9e a l'\u00E9cole ESTIAM de Tourcoing (Passage en 5\u00E8me ann\u00E9e valid\u00E9) </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n  ",
        styles: [__webpack_require__(574)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], CursusComponent);

var _a, _b;
//# sourceMappingURL=cursus.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngAfterViewInit = function () { };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'app-navbar', template: "\n    <navbar SideClass=\"navbar navbar-toggleable-md navbar-dark default-color fixed-top\">\n      <logo><a class=\"logo navbar-brand\" href=\"#\">Valerian Crasnier</a></logo>\n      <links>\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active hover-dash\">\n                <a class=\"nav-link\" scrollTo href=\"#profile\">Profil<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item hover-dash\">\n                <a class=\"nav-link\" scrollTo href=\"#studies\">Etudes</a>\n            </li>\n            <li class=\"nav-item hover-dash\">\n                <a class=\"nav-link\">Competences</a>\n            </li>\n        </ul>\n      </links>\n    </navbar>\n  ",
        styles: [__webpack_require__(575)] }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxComponent = (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngAfterContentChecked = function () {
        this.height = this._el.nativeElement.offsetHeight;
    };
    return ParallaxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mainSection'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ParallaxComponent.prototype, "_el", void 0);
ParallaxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-parallax',
        template: __webpack_require__(594),
        styles: [__webpack_require__(576)]
    }),
    __metadata("design:paramtypes", [])
], ParallaxComponent);

var _a;
//# sourceMappingURL=parallax.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent() {
        this.visibility = false;
        this.parentHeight = 0;
    }
    ProfileComponent.prototype.ngAfterContentChecked = function () {
        this.position = this._el.nativeElement.offsetTop;
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "parentHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('profileSection'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ProfileComponent.prototype, "_el", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfileComponent.prototype, "ngAfterContentChecked", null);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* trigger */])('visibilityChanged', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(100%)', visibility: 'hidden' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* animate */])('800ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ transform: 'translateX(0)', visibility: 'visible' }))
                ])])],
        template: "\n      <section class=\"profile\" #profileSection>\n        <div class=\"container-fluid\">\n          <div class=\"row\" id=\"profile\">\n            <div class=\"col-12 text-margin\">\n                  <div class=\"text-center intro navbar-color font-weight-bold\"><p>Bonjour ! </p> Je m'appelle Valerian et je suis d\u00E9veloppeur web.</div>\n\n              <p class=\"light-grey\">\n                  Plus qu'un metier c'est une passion pour moi, et cela a commenc\u00E9 lors de ma premi\u00E8re ann\u00E9e d'\u00E9tudes sup\u00E9rieure.\n                  J'ai d\u00E9puis bien progress\u00E9, acquis de l'experience au fil du temps mais le fun est rest\u00E9 intact.\n              </p>\n              <p class=\"light-grey\">\n                  Durant mes ann\u00E9es d'\u00E9tude j'ai pu progresser dans des technologies vari\u00E9es telles que le Javascript, PHP, Java, C/C++, HTML5, CSS/SASS...\n                  J'ai choisi de me sp\u00E9cialiser dans les technologies web, plus sp\u00E9cifiquement le d\u00E9veloppement front-end.\n              </p>\n            </div>\n          </div>\n        </div>\n      </section>\n  ",
        styles: [__webpack_require__(577)]
    })
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
        this.reactDoughnutChartData = [80, 20];
        this.reactDoughnutChartType = 'doughnut';
        this.reactDoughnutChartColors = [
            {
                backgroundColor: ['rgba(0,216,255,1)', 'rgba(230,230,230,1)'],
                borderColor: 'rgba(255,255,255,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: 'rgba(0,216,255,1)',
                pointHoverBackgroundColor: 'rgba(0,216,255,1)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.reactDoughnutChartOptions = {
            cutoutPercentage: 85,
            animation: {
                easing: 'easeOutBounce'
            },
            responsive: true,
            events: []
        };
        this.angularDoughnutChartData = [65, 35];
        this.angularDoughnutChartType = 'doughnut';
        this.angularDoughnutChartColors = [
            {
                backgroundColor: ['rgba(221,0,49,1)', 'rgba(230,230,230,1)'],
                borderColor: 'rgba(255,255,255,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: 'rgba(221,0,49,1)',
                pointHoverBackgroundColor: 'rgba(221,0,49,1)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.angularDoughnutChartOptions = {
            cutoutPercentage: 85,
            animation: {
                easing: 'easeOutBounce'
            },
            responsive: true,
            events: []
        };
        this.nodeDoughnutChartData = [90, 10];
        this.nodeDoughnutChartType = 'doughnut';
        this.nodeDoughnutChartColors = [
            {
                backgroundColor: ['rgba(140,200,75,1)', 'rgba(230,230,230,1)'],
                borderColor: 'rgba(255,255,255,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: 'rgba(140,200,75,1)',
                pointHoverBackgroundColor: 'rgba(140,200,75,1)',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.nodeDoughnutChartOptions = {
            cutoutPercentage: 85,
            animation: {
                easing: 'easeOutBounce'
            },
            responsive: true,
            events: []
        };
    }
    SkillsComponent.prototype.ngOnInit = function () { };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-skills',
        template: "\n    <section class=\"skills\">\n        <div class=\"container-fluid\">\n          <div class=\"row col-center\" id=\"studies\">\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInLeft\" data-wow-delay=\"0.2s\" data-wow-duration=\"1.5s\">\n              <div class=\"row item-center\">\n                <img class=\"small-logo\" src=\"assets/images/React.svg\"/>\n              </div>\n              <div class=\"row item-center\">\n                <div class=\"cyan-text\">REACT.JS</div>\n              </div>\n              <div class=\"row padding-canvas item-center\">\n                <canvas baseChart width=\"281\" height=\"281\"\n                        [data]=\"reactDoughnutChartData\"\n                        [chartType]=\"reactDoughnutChartType\"\n                        [colors]=\"reactDoughnutChartColors\"\n                        [options]=\"reactDoughnutChartOptions\"></canvas>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeIn\" data-wow-delay=\"1s\" data-wow-duration=\"2s\">\n              <div class=\"row item-center\">\n                <img class=\"small-logo\" src=\"assets/images/angular.svg\"/>\n              </div>\n              <div class=\"row item-center\">\n                <div class=\"red-text\">ANGULAR 2/4</div>\n              </div>\n              <div class=\"row padding-canvas item-center\">\n                <canvas baseChart width=\"281\" height=\"281\"\n                        [data]=\"angularDoughnutChartData\"\n                        [chartType]=\"angularDoughnutChartType\"\n                        [colors]=\"angularDoughnutChartColors\"\n                        [options]=\"angularDoughnutChartOptions\"></canvas>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 wow fadeInRight\" data-wow-delay=\"0.8s\" data-wow-duration=\"1.5s\">\n              <div class=\"row item-center\">\n                <img class=\"big-logo\" src=\"assets/images/Node.js.svg\"/>\n              </div>\n              <div class=\"row item-center\">\n                <div class=\"green-text\">NODE.JS</div>\n              </div>\n              <div class=\"row padding-canvas item-center\">\n                <canvas baseChart width=\"281\" height=\"281\"\n                        [data]=\"nodeDoughnutChartData\"\n                        [chartType]=\"nodeDoughnutChartType\"\n                        [colors]=\"nodeDoughnutChartColors\"\n                        [options]=\"nodeDoughnutChartOptions\"></canvas>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n  ", styles: [__webpack_require__(578)]
    }),
    __metadata("design:paramtypes", [])
], SkillsComponent);

//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".cursus {\n  font-family: 'Roboto';\n  font-size: 22px;\n  background-color: #fff;\n  min-height: 400px; }\n  .cursus .text-margin {\n    padding-right: 15%;\n    padding-left: 15%;\n    margin-top: 2.5em; }\n  .cursus .col-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n    /* align horizontal */\n    -ms-flex-align: center;\n        align-items: center; }\n  .cursus .grey-color {\n    color: #8a8a8a; }\n  .cursus .margin-bottom {\n    margin-bottom: 5vh; }\n  .cursus img {\n    max-width: 100%;\n    width: auto; }\n  @media screen and (min-width: 995px) and (min-height: 700px) {\n    .cursus .padding-top-estiam {\n      padding-top: 4.5vh; } }\n  @media screen and (min-width: 995px) and (max-height: 650px) {\n    .cursus .padding-top-estiam {\n      padding-top: 10vh; } }\n  @media screen and (max-width: 995px) {\n    .cursus .margin-bottom-xs {\n      margin-bottom: 5vh; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, "navbar {\n  margin-bottom: 60px; }\n\n.hover-dash:hover {\n  border-bottom: 1px solid #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".full-screen {\n  height: 100vh;\n  width: 100%; }\n  .full-screen #section-1 {\n    z-index: 1;\n    color: #fff;\n    height: 100vh; }\n    .full-screen #section-1 .parallax-layer-intro {\n      background: url(" + __webpack_require__(634) + ") no-repeat center center;\n      -webkit-background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      background-attachment: fixed !important;\n      background-position: center !important;\n      background-repeat: no-repeat !important;\n      background-size: cover !important;\n      width: 100%;\n      height: 100%;\n      z-index: 0;\n      background-attachment: scroll; }\n    .full-screen #section-1 .parallax-layer-base .full-bg-img {\n      background-color: rgba(255, 255, 255, 0.2);\n      height: 110vh; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .name-text {\n        font-size: 60px; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .last-name-color {\n        color: #2BBBAD;\n        opacity: 0.88; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .shadow-outline {\n        text-shadow: 0 0 150px #888; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .job {\n        font-size: 35px; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .mg-right {\n        margin-right: 0.2em; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .btn-git {\n        background-color: #565d6b; }\n      .full-screen #section-1 .parallax-layer-base .full-bg-img ul li .btn-li {\n        background-color: #0082CA; }\n    .full-screen #section-1 .row {\n      position: fixed; }\n  .full-screen #section-2 {\n    z-index: 2;\n    position: relative;\n    background: #fff;\n    width: 100%; }\n  .full-screen #section-3 {\n    z-index: 3;\n    position: relative;\n    height: 50vh;\n    width: 100%; }\n    @media screen and (max-width: 800px) {\n      .full-screen #section-3 .parallax-layer-base-studies {\n        background: url(" + __webpack_require__(638) + ") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-attachment: fixed !important;\n        background-position: center !important;\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        width: 100%;\n        height: 100%;\n        z-index: 0;\n        background-attachment: scroll; } }\n    @media screen and (min-width: 800px) {\n      .full-screen #section-3 .parallax-layer-base-studies {\n        background: url(" + __webpack_require__(637) + ") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-attachment: fixed !important;\n        background-position: center !important;\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        width: 100%;\n        height: 100%;\n        z-index: 0;\n        background-attachment: scroll; } }\n    .full-screen #section-3 .parallax-layer-studies .full-bg-img {\n      background-color: rgba(255, 255, 255, 0.7);\n      height: 50vh; }\n    @media screen and (min-width: 450px) {\n      .full-screen #section-3 .parallax-layer-base-studies .full-bg-img ul li .name-text {\n        font-size: 60px; } }\n    @media screen and (max-width: 450px) {\n      .full-screen #section-3 .parallax-layer-base-studies .full-bg-img ul li .name-text {\n        font-size: 40px; } }\n    .full-screen #section-3 .parallax-layer-base-studies .full-bg-img ul li .studies-color {\n      color: #2BBBAD;\n      opacity: 0.88; }\n  .full-screen #section-4 {\n    z-index: 4;\n    position: relative;\n    background: #fff;\n    width: 100%; }\n  .full-screen #section-5 {\n    z-index: 5;\n    position: relative;\n    height: 50vh;\n    width: 100%; }\n    @media screen and (max-width: 800px) {\n      .full-screen #section-5 .parallax-layer-base-studies {\n        background: url(" + __webpack_require__(636) + ") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-attachment: fixed !important;\n        background-position: center !important;\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        width: 100%;\n        height: 100%;\n        z-index: 0;\n        background-attachment: scroll; } }\n    @media screen and (min-width: 800px) {\n      .full-screen #section-5 .parallax-layer-base-studies {\n        background: url(" + __webpack_require__(635) + ") no-repeat center center;\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-attachment: fixed !important;\n        background-position: center !important;\n        background-repeat: no-repeat !important;\n        background-size: cover !important;\n        width: 100%;\n        height: 100%;\n        z-index: 0;\n        background-attachment: scroll; } }\n    .full-screen #section-5 .parallax-layer-studies .full-bg-img {\n      background-color: rgba(255, 255, 255, 0.2);\n      height: 50vh; }\n    @media screen and (min-width: 450px) {\n      .full-screen #section-5 .parallax-layer-base-studies .full-bg-img ul li .name-text {\n        font-size: 60px; } }\n    @media screen and (max-width: 450px) {\n      .full-screen #section-5 .parallax-layer-base-studies .full-bg-img ul li .name-text {\n        font-size: 40px; } }\n    .full-screen #section-5 .parallax-layer-base-studies .full-bg-img ul li .skills-color {\n      color: #FFF;\n      opacity: 0.88;\n      text-shadow: 0 0 20px #000; }\n  .full-screen #section-6 {\n    z-index: 6;\n    position: relative;\n    background: #fff;\n    width: 100%; }\n\n/*Parallax section*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".profile {\n  font-family: 'Roboto';\n  font-size: 22px;\n  min-height: 400px;\n  margin-top: 60px; }\n  .profile .text-margin {\n    padding-right: 10%;\n    padding-left: 10%;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em; }\n  .profile .intro {\n    margin-bottom: 1.5em;\n    font-size: 40px; }\n  .profile .navbar-color {\n    color: #2BBBAD;\n    opacity: 0.88; }\n  .profile .light-grey {\n    opacity: 0.6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)();
// imports


// module
exports.push([module.i, ".skills {\n  font-family: 'Roboto';\n  font-size: 22px;\n  background-color: #fff;\n  min-height: 400px; }\n  .skills .text-margin {\n    padding-right: 15%;\n    padding-left: 15%;\n    margin-top: 2.5em; }\n  .skills .small-logo {\n    max-width: 50%;\n    min-height: 215px;\n    max-height: 281px; }\n  .skills .big-logo {\n    max-width: 50%;\n    height: 215px; }\n  .skills .col-center {\n    -ms-flex-pack: center;\n        justify-content: center;\n    /* align horizontal */\n    -ms-flex-align: center;\n        align-items: center; }\n  .skills .grey-color {\n    color: #8a8a8a; }\n  .skills .item-center {\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -ms-flex-pack: center;\n        justify-content: center; }\n  .skills .padding-canvas {\n    padding-right: 30%;\n    padding-left: 30%;\n    padding-top: 15%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 191,
	"./af.js": 191,
	"./ar": 198,
	"./ar-dz": 192,
	"./ar-dz.js": 192,
	"./ar-kw": 193,
	"./ar-kw.js": 193,
	"./ar-ly": 194,
	"./ar-ly.js": 194,
	"./ar-ma": 195,
	"./ar-ma.js": 195,
	"./ar-sa": 196,
	"./ar-sa.js": 196,
	"./ar-tn": 197,
	"./ar-tn.js": 197,
	"./ar.js": 198,
	"./az": 199,
	"./az.js": 199,
	"./be": 200,
	"./be.js": 200,
	"./bg": 201,
	"./bg.js": 201,
	"./bm": 202,
	"./bm.js": 202,
	"./bn": 203,
	"./bn.js": 203,
	"./bo": 204,
	"./bo.js": 204,
	"./br": 205,
	"./br.js": 205,
	"./bs": 206,
	"./bs.js": 206,
	"./ca": 207,
	"./ca.js": 207,
	"./cs": 208,
	"./cs.js": 208,
	"./cv": 209,
	"./cv.js": 209,
	"./cy": 210,
	"./cy.js": 210,
	"./da": 211,
	"./da.js": 211,
	"./de": 214,
	"./de-at": 212,
	"./de-at.js": 212,
	"./de-ch": 213,
	"./de-ch.js": 213,
	"./de.js": 214,
	"./dv": 215,
	"./dv.js": 215,
	"./el": 216,
	"./el.js": 216,
	"./en-SG": 217,
	"./en-SG.js": 217,
	"./en-au": 218,
	"./en-au.js": 218,
	"./en-ca": 219,
	"./en-ca.js": 219,
	"./en-gb": 220,
	"./en-gb.js": 220,
	"./en-ie": 221,
	"./en-ie.js": 221,
	"./en-il": 222,
	"./en-il.js": 222,
	"./en-nz": 223,
	"./en-nz.js": 223,
	"./eo": 224,
	"./eo.js": 224,
	"./es": 227,
	"./es-do": 225,
	"./es-do.js": 225,
	"./es-us": 226,
	"./es-us.js": 226,
	"./es.js": 227,
	"./et": 228,
	"./et.js": 228,
	"./eu": 229,
	"./eu.js": 229,
	"./fa": 230,
	"./fa.js": 230,
	"./fi": 231,
	"./fi.js": 231,
	"./fo": 232,
	"./fo.js": 232,
	"./fr": 235,
	"./fr-ca": 233,
	"./fr-ca.js": 233,
	"./fr-ch": 234,
	"./fr-ch.js": 234,
	"./fr.js": 235,
	"./fy": 236,
	"./fy.js": 236,
	"./ga": 237,
	"./ga.js": 237,
	"./gd": 238,
	"./gd.js": 238,
	"./gl": 239,
	"./gl.js": 239,
	"./gom-latn": 240,
	"./gom-latn.js": 240,
	"./gu": 241,
	"./gu.js": 241,
	"./he": 242,
	"./he.js": 242,
	"./hi": 243,
	"./hi.js": 243,
	"./hr": 244,
	"./hr.js": 244,
	"./hu": 245,
	"./hu.js": 245,
	"./hy-am": 246,
	"./hy-am.js": 246,
	"./id": 247,
	"./id.js": 247,
	"./is": 248,
	"./is.js": 248,
	"./it": 250,
	"./it-ch": 249,
	"./it-ch.js": 249,
	"./it.js": 250,
	"./ja": 251,
	"./ja.js": 251,
	"./jv": 252,
	"./jv.js": 252,
	"./ka": 253,
	"./ka.js": 253,
	"./kk": 254,
	"./kk.js": 254,
	"./km": 255,
	"./km.js": 255,
	"./kn": 256,
	"./kn.js": 256,
	"./ko": 257,
	"./ko.js": 257,
	"./ku": 258,
	"./ku.js": 258,
	"./ky": 259,
	"./ky.js": 259,
	"./lb": 260,
	"./lb.js": 260,
	"./lo": 261,
	"./lo.js": 261,
	"./lt": 262,
	"./lt.js": 262,
	"./lv": 263,
	"./lv.js": 263,
	"./me": 264,
	"./me.js": 264,
	"./mi": 265,
	"./mi.js": 265,
	"./mk": 266,
	"./mk.js": 266,
	"./ml": 267,
	"./ml.js": 267,
	"./mn": 268,
	"./mn.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 271,
	"./ms-my": 270,
	"./ms-my.js": 270,
	"./ms.js": 271,
	"./mt": 272,
	"./mt.js": 272,
	"./my": 273,
	"./my.js": 273,
	"./nb": 274,
	"./nb.js": 274,
	"./ne": 275,
	"./ne.js": 275,
	"./nl": 277,
	"./nl-be": 276,
	"./nl-be.js": 276,
	"./nl.js": 277,
	"./nn": 278,
	"./nn.js": 278,
	"./pa-in": 279,
	"./pa-in.js": 279,
	"./pl": 280,
	"./pl.js": 280,
	"./pt": 282,
	"./pt-br": 281,
	"./pt-br.js": 281,
	"./pt.js": 282,
	"./ro": 283,
	"./ro.js": 283,
	"./ru": 284,
	"./ru.js": 284,
	"./sd": 285,
	"./sd.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 292,
	"./sr-cyrl": 291,
	"./sr-cyrl.js": 291,
	"./sr.js": 292,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./tg": 299,
	"./tg.js": 299,
	"./th": 300,
	"./th.js": 300,
	"./tl-ph": 301,
	"./tl-ph.js": 301,
	"./tlh": 302,
	"./tlh.js": 302,
	"./tr": 303,
	"./tr.js": 303,
	"./tzl": 304,
	"./tzl.js": 304,
	"./tzm": 306,
	"./tzm-latn": 305,
	"./tzm-latn.js": 305,
	"./tzm.js": 306,
	"./ug-cn": 307,
	"./ug-cn.js": 307,
	"./uk": 308,
	"./uk.js": 308,
	"./ur": 309,
	"./ur.js": 309,
	"./uz": 311,
	"./uz-latn": 310,
	"./uz-latn.js": 310,
	"./uz.js": 311,
	"./vi": 312,
	"./vi.js": 312,
	"./x-pseudo": 313,
	"./x-pseudo.js": 313,
	"./yo": 314,
	"./yo.js": 314,
	"./zh-cn": 315,
	"./zh-cn.js": 315,
	"./zh-hk": 316,
	"./zh-hk.js": 316,
	"./zh-tw": 317,
	"./zh-tw.js": 317
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 584;


/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-parallax></app-parallax>\r\n"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<!--Main parallax wrapper-->\r\n<div class=\"parallax full-screen\">\r\n\r\n  <!--First section-->\r\n  <div id=\"section-1\" class=\"parallax-section\" #mainSection>\r\n\r\n    <!--Parallax content-->\r\n    <div class=\"parallax-layer parallax-layer-base\">\r\n\r\n      <!--Container to center the content-->\r\n      <div class=\"full-bg-img flex-center\">\r\n        <ul>\r\n          <li>\r\n            <h1 class=\"h1-responsive wow fadeInDown\" data-wow-delay=\"0.2s\"><span class=\"mg-right name-text font-weight-bold white-text shadow-outline\">VALERIAN</span> <span class=\"last-name-color font-weight-bold name-text\">CRASNIER</span></h1>\r\n          </li>\r\n          <li>\r\n            <h2 class=\"h2-responsive wow fadeInDown job font-weight-bold shadow-outline\" data-wow-delay=\"0.2s\">Developpeur Web</h2>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://www.linkedin.com/in/valerian-crasnier-01836a131/\"><button type=\"button\" class=\"btn btn-li\" ripple-radius><i class=\"fa fa-linkedin left\"></i>  Linkedin</button></a>\r\n            <a href=\"https://github.com/sileax\"><button type=\"button\" class=\"btn btn-git\" ripple-radius><i class=\"fa fa-github left\"></i>Github</button></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/Container to center the content-->\r\n\r\n    </div>\r\n    <!--/Parallax content-->\r\n\r\n    <!--Parallax background-->\r\n    <div class=\"parallax-layer parallax-layer-intro\">\r\n\r\n    </div>\r\n    <!--/Parallax background-->\r\n\r\n  </div>\r\n  <!--/First section-->\r\n\r\n  <!--Dummy Content-->\r\n  <div id=\"section-2\">\r\n    <div class=\"container-fluid pt-1 mb-3\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\" id=\"profile\">\r\n          <app-profile [parentHeight]=\"height\"></app-profile>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"section-3\">\r\n\r\n    <div class=\"parallax-layer parallax-layer-studies\">\r\n      <div class=\"full-bg-img\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"parallax-layer-base-studies\">\r\n      <div class=\"full-bg-img flex-center\">\r\n        <ul>\r\n          <li>\r\n            <h1 class=\"h1-responsive wow fadeInDown\" data-wow-delay=\"0.2s\"><span class=\"mg-right name-text font-weight-bold studies-color shadow-outline\">CURSUS UNIVERSITAIRE</span></h1>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"section-4\">\r\n    <div class=\"container-fluid pt-1 mb-3\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\" id=\"cursus\">\r\n          <app-cursus [parentHeight]=\"height\"></app-cursus>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"section-5\">\r\n\r\n    <div class=\"parallax-layer parallax-layer-studies\">\r\n      <div class=\"full-bg-img\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"parallax-layer-base-studies\">\r\n      <div class=\"full-bg-img flex-center\">\r\n        <ul>\r\n          <li>\r\n            <h1 class=\"h1-responsive wow fadeInDown\" data-wow-delay=\"0.2s\"><span class=\"mg-right name-text font-weight-bold skills-color shadow-outline\">COMPETENCES</span></h1>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div id=\"section-6\">\r\n    <div class=\"container-fluid pt-1 mb-3\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\" id=\"skills\">\r\n          <app-skills [parentHeight]=\"height\"></app-skills>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <!--Dummy Content-->\r\n\r\n</div>\r\n<!--/Main parallax wrapper-->\r\n"

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Profile.073b6ea5ecbc68096aa5.jpg";

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Skills.3a2c01ae708a998f9e64.jpg";

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Skills_mobile.f7d590a2c72137bfe344.jpg";

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Studies.7771f0a1707e2e77afe6.jpg";

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Studies_mobile.7347e2168ba13184ade3.jpg";

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(329);


/***/ })

},[654]);
//# sourceMappingURL=main.bundle.js.map