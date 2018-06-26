import { NgxSurveyjsPage } from './app.po';

describe('ngx-surveyjs App', function() {
  let page: NgxSurveyjsPage;

  beforeEach(() => {
    page = new NgxSurveyjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
