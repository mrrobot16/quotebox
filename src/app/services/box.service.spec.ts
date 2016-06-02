import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BoxService } from './box.service';

describe('Box Service', () => {
  beforeEachProviders(() => [BoxService]);

  it('should ...',
      inject([BoxService], (service: BoxService) => {
    expect(service).toBeTruthy();
  }));
});
