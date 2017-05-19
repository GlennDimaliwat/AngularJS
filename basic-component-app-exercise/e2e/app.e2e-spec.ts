import { BasicComponentAppExercisePage } from './app.po';

describe('basic-component-app-exercise App', () => {
  let page: BasicComponentAppExercisePage;

  beforeEach(() => {
    page = new BasicComponentAppExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
