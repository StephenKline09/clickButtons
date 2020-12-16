import { setLandingPageDimensions } from 'src/setLandingPageParams';
import { setScreenDimensions } from '../../setScreenParams';
import { OnInit } from '@angular/core';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('firstAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('3s 1.5s')
      ]),
      transition(':leave',
        animate(6000, style({opacity: 0})))
    ]),
//     trigger('secondAnimation', [
//       state('load', style({opacity: 1})),
//       transition(':enter', [
//         style({opacity: 0}),
//         animate('3s 10s')
//       ]),
//       transition(':leave',
//         animate(6000, style({opacity: 0})))
//     ])
]
  })
export class LandingPageComponent implements OnInit {
  setScreenDimensions //Welcome Page should extend/adjust when toggling sidenav
  setLandingPageDimensions //Welcome Background should adjust to fit screen

  constructor() { }

  ngOnInit(): void {
  }

}
