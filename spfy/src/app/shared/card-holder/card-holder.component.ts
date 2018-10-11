import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.scss']
})
export class CardHolderComponent implements OnInit {
  @Input() title: any = '';
  @Input() items: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
