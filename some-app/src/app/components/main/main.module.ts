import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mainRuotes from './main.ruotes';

@NgModule({
    imports: [CommonModule, mainRuotes, FlexLayoutModule],
    declarations: [MainComponent]
})
export default class MainModule {}
