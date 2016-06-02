import { QuoteboxPage } from './app.po';

describe('quotebox App', function() {
  let page: QuoteboxPage;

  beforeEach(() => {
    page = new QuoteboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('quotebox works!');
  });
});
