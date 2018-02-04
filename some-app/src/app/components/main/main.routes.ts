import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes = [
    {path: '', component: MainComponent}
];
export default RouterModule.forChild(routes);
