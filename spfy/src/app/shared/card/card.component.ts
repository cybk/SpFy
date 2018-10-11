import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() artist: any = {};
  @Input() canNavigate: boolean;
  constructor() {
  }

  ngOnInit() {
    this.canNavigate = this.canNavigate !== false;
  }

}
