import { PopularityDirective } from './../shared/directives/popularity.directive';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './../shared/card/card.component';
import { CardHolderComponent } from './../shared/card-holder/card-holder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/Common/http/testing';

import { WelcomeComponent } from './welcome.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        CardHolderComponent,
        CardComponent,
        PopularityDirective
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    el =  fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a welcome message', () => {
    const welcome = el.query( By.css('h1'));
    expect(welcome.nativeElement.innerText).toEqual('Welcome');
  })
});
