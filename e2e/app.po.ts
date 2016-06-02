export class QuoteboxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('quotebox-app h1')).getText();
  }
}
