import { Observable } from 'rxjs';

// icon.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private http: HttpClient) {}

  getIcon(iconName: string): {
    coloringIcon: Observable<string>;
    filledIcon: Observable<string>;
    strokedIcon: Observable<string>;
  } {
    const coloringIconPath = `/assets/icons/${iconName}-coloring.svg`;
    const filledIconPath = `/assets/icons/${iconName}-filled.svg`;
    const strokedIconPath = `/assets/icons/${iconName}-stroked.svg`;

    const coloringIcon = this.http.get(coloringIconPath, {
      responseType: 'text',
    });
    const filledIcon = this.http.get(filledIconPath, { responseType: 'text' });
    const strokedIcon = this.http.get(strokedIconPath, {
      responseType: 'text',
    });

    return { coloringIcon, filledIcon, strokedIcon };
  }
}
