import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './components/icon/icon.component';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { FlowbiteModule } from 'flowbite-angular';



@NgModule({
  declarations: [
    IconComponent,
    SwitchLanguageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlowbiteModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    IconComponent,
    SwitchLanguageComponent
  ]
})
export class SharedModule { }
