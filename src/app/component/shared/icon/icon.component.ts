import { Observable } from 'rxjs';
// icon.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { IconService } from '../../../shared/services/icon/icon.service';


// import { IconService } from '../../../shared/services/icon/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: '<ng-container *ngIf="svgContent; else fallbackTemplate" [innerHTML]="svgContent"></ng-container>',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input() iconName: string= "";
  @Input() className: string = '';
  @Input() iconSize: number = 24;
  @Input() height: number | null = null;
  @Input() style: object | null = null;
  @Input() fillOpacity: number | null = null;
  @Input() iconColor: string = 'currentColor';

  svgContent: string = "";

  constructor(private iconService: IconService) {}

  ngOnInit() {
    this.loadIcons();
  }

  private loadIcons() {
    const iconPaths = this.iconService.getIcon(this.iconName);


    const iconObservable: Observable<string> = iconPaths.coloringIcon;

    iconObservable.subscribe(
      (data: string) => {
        this.svgContent = data;
      },
      (error: any) => {
        console.error('Error fetching icon:', error);
      }
    );
  }
}
