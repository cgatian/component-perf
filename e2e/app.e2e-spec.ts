import { ComponentPerfPage } from './app.po';

describe('component-perf App', () => {
  let page: ComponentPerfPage;

  beforeEach(() => {
    page = new ComponentPerfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
