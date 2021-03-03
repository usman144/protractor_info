const { browser, element } = require("protractor")

describe('hello', function()
{
it('hello how ar e', function(){
  browser.get("http://www.protractortest.org/#/",20000);
  element(By.id('drop4')).click();
  expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
  browser.driver.sleep(3000);
  element(By.id('drop2')).click();
  browser.driver.sleep(3000);
  browser.driver.sleep(3000);
  browser.driver.sleep(3000);



});

});