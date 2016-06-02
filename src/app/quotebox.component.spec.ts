import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { QuoteboxAppComponent } from '../app/quotebox.component';

beforeEachProviders(() => [QuoteboxAppComponent]);

describe('App: Quotebox', () => {
  it('should create the app',
      inject([QuoteboxAppComponent], (app: QuoteboxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'quotebox works!\'',
  //     inject([QuoteboxAppComponent], (app: QuoteboxAppComponent) => {
  //   expect(app.title).toEqual('quotebox works!');
  // }));
});
