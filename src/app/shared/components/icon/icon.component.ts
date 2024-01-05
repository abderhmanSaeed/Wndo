 import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() name: string = "";
  @Input() class: string = '';
  @Input() size: number = 24;
  @Input() height: number | null = null;
  @Input() style: object | null = null;
  @Input() fillOpacity: number | null = null;
  @Input() color: string = 'currentColor';
}
