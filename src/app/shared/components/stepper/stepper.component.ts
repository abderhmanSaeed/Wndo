import { NgFor, NgClass, NgIf, NgTemplateOutlet } from "@angular/common";
import { TemplateRef, Component, AfterContentInit, Output, EventEmitter, ContentChildren, QueryList, Input } from "@angular/core";

import { StepComponent } from "./step/step.component";


interface Step {
  label: string;
  icon: string;
  template: TemplateRef<any> | null;
  nextButtonLabel?: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements AfterContentInit {
  @Input() btnLabel:string = 'Next';
  @Input() disabledNextButton:boolean =  false;

  @ContentChildren(StepComponent) steps: QueryList<StepComponent> | undefined;
  currentStep: number = 0;
  currentStepTemplate: TemplateRef<any> | null = null;

  ngAfterContentInit(): void {
    // Ensure steps are initialized before updating the template
    this.steps?.changes.subscribe(() => {
      this.updateCurrentStepTemplate();
    });
  }

  nextStep() {
    if (this.steps && this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.updateCurrentStepTemplate();
    }
  }

  backStep() {
    if (this.steps && this.currentStep < this.steps.length - 1) {
      this.currentStep--;
      this.updateCurrentStepTemplate();
    }
  }

  private updateCurrentStepTemplate() {
    if (this.steps) {
      this.currentStepTemplate = this.steps.toArray()[this.currentStep]?.template || null;
      this.updateStepActivation();
    }
  }

  private updateStepActivation() {
    if (this.steps) {
      this.steps.toArray().forEach((step, index) => {
        step.isActive = index === this.currentStep;
      });
    }
  }

}
