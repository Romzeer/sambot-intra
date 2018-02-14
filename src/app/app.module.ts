import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'ng4-social-login';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { RouterModule } from '@angular/router';

import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { ClasseComponent } from './dashboard/classe/classe.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskModule } from './dashboard/task/task.module';
import { SharedModule } from './shared/shared.module';
import { AbsenceComponent } from './dashboard/absence/absence.component';

import { CalendarModule, CalendarMonthViewComponent, CalendarMonthModule } from 'angular-calendar';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { BotComponent } from './dashboard/bot/bot.component';

const CONFIG = new AuthServiceConfig([
  {
    id: '482273183967-uu4b32fenfbvmdnodc58l6nakfmppvn6',
    provider: new GoogleLoginProvider('482273183967-uu4b32fenfbvmdnodc58l6nakfmppvn6.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return CONFIG;
}
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    ClasseComponent,
    AbsenceComponent,
    CalendarComponent,
    BotComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    routing,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    HttpClientModule,
    TaskModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    SettingsService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
