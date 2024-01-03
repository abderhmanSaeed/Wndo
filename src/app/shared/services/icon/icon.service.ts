import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
// import { AssetUrl } from '@angular/platform-browser/src/private_imports';
// icon.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }


  getIcon(iconName: string): {
    coloringIcon: Observable<string>;
    filledIcon: Observable<string>;
    strokedIcon: Observable<string>;
  } {
    // Update the icon paths based on the provided icon names
    const coloringIconPath = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${iconName}-coloring.svg`);
    const filledIconPath = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${iconName}-filled.svg`);
    const strokedIconPath = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${iconName}-stroked.svg`);

    const coloringIcon = this.http.get(coloringIconPath.toString(), { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error(`Error fetching coloring icon for ${iconName}:`, error);
        return of(''); // Return an empty string or a default icon content
      })
    );

    const filledIcon = this.http.get(filledIconPath.toString(), { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error(`Error fetching filled icon for ${iconName}:`, error);
        return of(''); // Return an empty string or a default icon content
      })
    );

    const strokedIcon = this.http.get(strokedIconPath.toString(), { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error(`Error fetching stroked icon for ${iconName}:`, error);
        return of(''); // Return an empty string or a default icon content
      })
    );

    return { coloringIcon, filledIcon, strokedIcon };
  }

}
