import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { TaskListComponent } from './dashboard/task/task-list/task-list.component';
import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
<<<<<<< HEAD
=======
import { AbsenceComponent } from './dashboard/absence/absence.component';
>>>>>>> 3aed25bdc4a40a702f83de94fbfb85d8957de16f
import { CalendarComponent } from './dashboard/calendar/calendar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'notes', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent},
    {path: 'todolist', pathMatch: 'full', component: TaskListComponent},
    {path: 'absence', pathMatch: 'full', component: AbsenceComponent},
    {path: 'calendar', pathMatch: 'full', component: CalendarComponent},
  ]},
];

export const routing = RouterModule.forRoot(routes);
