import { BottomToolbarExamplePage } from './app.po';

describe('bottom-toolbar-example App', function() {
  let page: BottomToolbarExamplePage;

  beforeEach(() => {
    page = new BottomToolbarExamplePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bottom-toolbar-example works!');
  });
});
