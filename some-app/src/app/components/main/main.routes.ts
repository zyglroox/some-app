import { SignInComponent } from './../sign-in/sign-in.component';
import { AddNewComponent } from './../add-new/add-new.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes = [
    {path: '', component: MainComponent},
    {path: 'add_new', component: AddNewComponent},
    {path: 'sign_in', component: SignInComponent}
];
export default RouterModule.forChild(routes);
