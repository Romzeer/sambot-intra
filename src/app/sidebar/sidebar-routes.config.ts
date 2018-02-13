import { TaskListComponent } from '../dashboard/task/task-list/task-list.component';

export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'Votre Profil', icon: 'person', children: null },
    { path: 'notes', title: 'Vos Notes', icon: 'content_paste', children: null },
    { path: '#component', id: 'component', title: 'Absences', icon: 'apps', children: [
        {path: 'components/price-table', title: 'Price Table', icon: 'PT'},
        {path: 'components/panels', title: 'Panels', icon: 'P'},
        {path: 'components/wizard', title: 'Wizard', icon: 'W'},
      ]},
    { path: 'todolist', title: 'Votre Todolist', icon: 'content_paste', children: null },
    { path: 'notification', title: 'Notifications', icon: 'notifications', children: null },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];
