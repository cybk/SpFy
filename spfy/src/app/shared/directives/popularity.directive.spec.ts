import { PopularityDirective } from './popularity.directive';
import { Component } from '@angular/core';

@Component({
  template: `<div> [appPopularity]='90'</div>`
})
class TestComponent{}

describe('PopularityDirective', () => {
  it('should create an instance', () => {
    const directive = new PopularityDirective();
    expect(directive).toBeTruthy();
  });
});
