import { Observable } from 'rxjs';
// icon.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { IconService } from '../../../shared/services/icon/icon.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
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
        console.log('Received SVG content:', data);
        this.svgContent = data;
      },
      (error: any) => {
        console.error('Error fetching icon:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Status Text:', error.statusText);
        }
      }
    );
  }

}


// import { Component, Input, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-icon',
//   templateUrl: './icon.component.html',
//   styleUrls: ['./icon.component.scss']
// })
// export class IconComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   @Input() name: string = "";
//   @Input() class: string = '';
//   @Input() size: number = 24;
//   @Input() height: number | null = null;
//   @Input() style: object | null = null;
//   @Input() fillOpacity: number | null = null;
//   @Input() color: string = 'currentColor';
// }
