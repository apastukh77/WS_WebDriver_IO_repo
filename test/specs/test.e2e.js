import { expect } from '@wdio/globals'
import LoginPage from '../pages/dou_main.page.js';


describe("Webdriverio main page", () => {

    before(() => {
        // This is a before hook that runs once before any tests in this describe block.
        // Initialize the browser and navigate to the page here.
        browser.url(`https://the-internet.herokuapp.com/login`);
    });


    xit("should show add Value command", async () => {
        await browser.pause(2000);
        console.log("LoginPage.username  will be empty: "+LoginPage.username.getText());
        await LoginPage.username.waitForExist();
        await LoginPage.username.waitForDisplayed();
        await LoginPage.setUsernameInput(123);
        await browser.pause(2000);
        console.log("LoginPage.username: "+LoginPage.username.getText());


        await LoginPage.username.addValue("hello");
        await browser.pause(2000);
        console.log("LoginPage.username: "+LoginPage.username.getText());


        await LoginPage.setPasswordInput("12325373");
        await browser.pause(2000);

      

        await expect(LoginPage.username).toHaveValue("123hello");

        await LoginPage.clickOnLoginBtn();
    });

    

});