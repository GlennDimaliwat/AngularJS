import { ShoppingRecipeCartAppPage } from './app.po';

describe('shopping-recipe-cart-app App', () => {
  let page: ShoppingRecipeCartAppPage;

  beforeEach(() => {
    page = new ShoppingRecipeCartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
