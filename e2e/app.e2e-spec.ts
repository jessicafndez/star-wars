import { StarWarsAngularPage } from './app.po';

describe('star-wars-angular App', () => {
  let page: StarWarsAngularPage;

  beforeEach(() => {
    page = new StarWarsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
