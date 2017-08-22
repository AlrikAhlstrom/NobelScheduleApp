import { Ang2CliHerokuPage } from './app.po';

describe('ang2-cli-heroku App', () => {
  let page: Ang2CliHerokuPage;

  beforeEach(() => {
    page = new Ang2CliHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
