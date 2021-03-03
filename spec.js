const { browser, element } = require("protractor")

describe('hello', function()
{
it('hello how ar e', function(){
  browser.get("http://www.protractortest.org/#/",20000);
  element(By.id('drop4')).click();
  expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
  


});

});