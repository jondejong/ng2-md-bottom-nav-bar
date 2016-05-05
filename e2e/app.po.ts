export class BottomToolbarExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bottom-toolbar-example-app h1')).getText();
  }
}
