import { SignInComponent } from './../sign-in/sign-in.component';
import { AddNewComponent } from './../add-new/add-new.component';
import { PostComponent } from './../post/post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mainRoutes from './main.routes';
import { MainService } from './../../services/main/main.service';

@NgModule({
    imports: [CommonModule, mainRoutes, FlexLayoutModule],
    declarations: [MainComponent, PostComponent, AddNewComponent, SignInComponent],
    providers: [MainService]
})
export default class MainModule {}
