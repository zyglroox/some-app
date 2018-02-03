import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import mainRuotes from './main.ruotes';

@NgModule({
    imports: [CommonModule, mainRuotes],
    declarations: [MainComponent]
})
export default class MainModule {}
