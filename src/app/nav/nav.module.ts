import { AppModule } from './../app.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormsModule } from '@angular/forms';
import { NavComponentRoutingModule } from './nav-routing.module';
import { NbMenuModule, NbAccordionModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonCustomScrollbarModule,
    NavComponentRoutingModule,
    NbMenuModule.forRoot(),
    TranslateModule.forChild(),
    NbIconModule,
    NbAccordionModule,
    AppModule,
  ],
  declarations: [NavMenuComponent],
})
export class NavModule {}
