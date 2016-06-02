import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { QuotesService } from './quotes.service';

describe('Quotes Service', () => {
  beforeEachProviders(() => [QuotesService]);

  it('should ...',
      inject([QuotesService], (service: QuotesService) => {
    expect(service).toBeTruthy();
  }));
});
