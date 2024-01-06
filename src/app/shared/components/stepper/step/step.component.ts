import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input() label: string | undefined;
  @Input() icon: string | undefined;
  @Input() nextButtonLabel: string | undefined;
  private _template: TemplateRef<any> | null = null;

  @Input()
  set template(value: TemplateRef<any> | null) {
    this._template = value;
  }

  get template(): TemplateRef<any> | null {
    return this._template;
  }

  @Input() isActive: boolean = false;
}
