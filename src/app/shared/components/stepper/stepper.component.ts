import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { StepComponent } from './step/step.component';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements AfterContentInit {
  @Input() btnLabel: string = 'Next';
  @Input() disabledNextButton: boolean = false;
  @Input() hasActionFooter: boolean = true;

  constructor(private renderer: Renderer2) {}

  @ContentChildren(StepComponent) steps: QueryList<StepComponent> | undefined;
  currentStep: number = 0;
  currentStepTemplate: any = null;

  @ViewChild('stepContainer') stepsElement: ElementRef | undefined;

  ngAfterViewInit() {
    this.calculateLineWidths();
  }

  ngAfterContentInit() {
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
    if (this.steps && this.currentStep > 0) {
      this.currentStep--;
      this.updateCurrentStepTemplate();
    }
  }

  private updateCurrentStepTemplate() {
    if (this.steps) {
      this.currentStepTemplate =
        this.steps.toArray()[this.currentStep]?.template || null;
    }
  }


  calculateLineWidths() {
    let stepElementsArray: any[] = [];

    if (this.steps && this.stepsElement) {
      stepElementsArray = this.stepsElement.nativeElement.childNodes;

      stepElementsArray.forEach((step: any, index: number) => {
        if (index < stepElementsArray.length - 1) {
          const nextStep = stepElementsArray[index + 1];
          const line = step.children[0]?.children[0];
          if (line) {
            let lineWidth: number;

            const stepX = step.offsetLeft + step.offsetWidth / 2;
            const stepY = step.offsetTop + step.offsetHeight / 2;

            const nextStepX = nextStep.offsetLeft + nextStep.offsetWidth / 2;
            const nextStepY = nextStep.offsetTop + nextStep.offsetHeight / 2;

            const distance = Math.sqrt(Math.pow(nextStepX - stepX, 2) + Math.pow(nextStepY - stepY, 2));
            const circleWidth = 11;

            lineWidth = distance - circleWidth * 2;

            this.renderer.setStyle(line, 'width', `${lineWidth}px`);
          }
        }
      });
    }
  }

}
