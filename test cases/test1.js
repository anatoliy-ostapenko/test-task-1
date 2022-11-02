const { browser, element } = require("protractor");

describe('', function() {
    it('should greet the named user', async function() {
      await browser.waitForAngularEnabled(false);
      await browser.get('https://www.sbzend.ssls.com');
      await expect(browser.getCurrentUrl()).toEqual("https://www.sbzend.ssls.com/");

      await element(by.xpath('//*[@id="app"]/div/header/div/div/button[1]/span')).click();
      await expect(browser.getCurrentUrl()).toEqual("https://www.sbzend.ssls.com/authorize");
      await browser.sleep(2000);

      await element(by.name('email')).click().sendKeys('ssls.automation+666@gmail.com');
      await element(by.name('password')).click().sendKeys('123456');
      await element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[2]/div/div[1]/div[2]/button/span[1]')).click();
      
      //doesn't work
      //await expect(element(by.name('password', 'qq')).isDisplayed()).toBe(true);


    await expect(element(by.xpath('//*[@id="ng-app"]/body/div[1]/ssls-header/div/div/header/div/div/button[1]/span')).isDisplayed());
    await element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/ui-view/div/ng-include/div/div/form/div[3]/button')).click();
    await browser.sleep(3000);

    //await expect(element(by.xpath('//*[@id="app"]/div/header/div/div/div[1]/button/span')).isDispayed());
    //await expect(element(by.xpath('//*[@id="app"]/div/header/div/div/div[1]/button/span')).isDisplayed());

    //await element(by.text('ssls.automation+666@gmail.com')).click();

    //await browser.sleep(2000);
    
    
    
    //await element(by.xpath('//*[@id="app"]/div/header/div/div/div[1]/div/ul/li[5]/button')).click();

    });
  
     xit('should list todos', async function() {
      await browser.waitForAngularEnabled(false);
      await browser.get('https://www.sbzend.ssls.com');
      await expect(browser.getCurrentUrl()).toEqual("https://www.sbzend.ssls.com/");
      });
  
      xit('should add a todo', function() {
        var addTodo = element(by.model('todoList.todoText'));
        var addButton = element(by.css('[value="add"]'));
  
        addTodo.sendKeys('write a protractor test');
        addButton.click();
  
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
      });

    });
  