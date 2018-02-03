import { RouterModule } from '@angular/router';
import MainModule from './components/main/main.module';

const routes = [
    {path: '', loadChildren: () => MainModule}
];

export default RouterModule.forRoot(routes);
