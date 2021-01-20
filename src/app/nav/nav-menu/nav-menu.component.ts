import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Platform, MenuController } from '@ionic/angular';

import { NbAccordionComponent } from '@nebular/theme';

import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.scss'],
  animations: [
    trigger('expandCard', [
      transition(':enter', [style({ 'max-height': '0' }), animate('120ms ease', style({ 'max-height': '160px' }))]),
      transition(':leave', [style({ height: '*' }), animate('120ms ease', style({ height: '0px' }))]),
    ]),
    trigger('arrow-dropdown', [
      state('normal', style({ transform: 'rotate(0deg)' })),
      state('inverted', style({ transform: 'rotate(180deg)' })),
      transition('normal => inverted', [animate('120ms')]),
      transition('inverted => normal', [animate('120ms')]),
    ]),
  ],
})
export class NavComponent implements OnInit, OnChanges {
  ngOnInit(): void {}
  ngOnChanges(): void {}
}
