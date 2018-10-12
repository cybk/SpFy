import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  public code: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(q => {
      this.code = q.code;
      console.log(q.code);
    });
  }

  ngOnInit() {
  }

}
