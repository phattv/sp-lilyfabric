import { LilyfabricPage } from './app.po';

describe('lilyfabric App', () => {
  let page: LilyfabricPage;

  beforeEach(() => {
    page = new LilyfabricPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
