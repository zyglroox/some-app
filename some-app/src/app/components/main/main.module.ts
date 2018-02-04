import { PostComponent } from './../post/post.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mainRoutes from './main.routes';
import { MainService } from './main.service';

@NgModule({
    imports: [CommonModule, mainRoutes, FlexLayoutModule],
    declarations: [MainComponent, PostComponent],
    providers: [MainService]
})
export default class MainModule {}
