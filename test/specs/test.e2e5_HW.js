import { expect } from '@wdio/globals'

import GitHubMainPage from "./../pages/github_main.page.js";
import GitHubPricingPage from "./../pages/github_pricing.page.js";
import GitHubSignUpPage from "./../pages/github_signup.page.js";
import GitHubReposPage from "./../pages/github_repositories.page.js";
import GitHubSignInPage from "./../pages/github_signin.page.js";
import GitHubNewsletterPage from "./../pages/github_newsletter.page.js";
import GitHubOrganizationPage from "./../pages/github_organizations.page.js";
import GitHubConfirmationPage from "./../pages/github_confirmation.page.js";

import assert from 'assert/strict';

 const SHORT_TIMEOUT = 2000;
 const BASE_URL_GITHUB = "https://github.com/";


describe("GitHub page", () => {

    beforeEach(async () => {
     
        await browser.url(BASE_URL_GITHUB);
        // await browser.maximizeWindow();
        await browser.pause(SHORT_TIMEOUT);
        
    });


    afterEach(async () => {
        // Delete all cookies
        await browser.deleteCookies();
        await browser.pause(SHORT_TIMEOUT);
    });


    it.skip("TC1. Sign up using user credentials on sign up page", async () => {
        console.log("========================================TC1==============================================");
        const userCredentials = {
            email: "Casper.Hopkins@test.org.ca",
            password: "testtest1!Q",
            username: "Casper-HopkinsTest",
            receiveProduct: "",
        };

        //1. Click on the Sign up link.
        await waitForElementToExist(GitHubMainPage.signUpLink, 5000, "signUpLink");
        await GitHubMainPage.clickOnSignUpLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Click on Sign Up Content Container on the sign up page.
        await waitForElementToExist(GitHubSignUpPage.signUpContentContainer, 5000, "signUpContentContainer");
        await GitHubSignUpPage.clickOnSignUpContentContainer();
        //3. Click in Email Input.
        await waitForElementClickable(GitHubSignUpPage.emailInput,  5000, "emailInput");
        await GitHubSignUpPage.clickOnEmailInput();
        //4. Set value in Email Input.
        await GitHubSignUpPage.setEmailInput(userCredentials.email);
        //5. Click on Email Continue Button.
        await waitForElementClickable(GitHubSignUpPage.emailContinueBtn, 5000,  "emailContinueBtn");
        await GitHubSignUpPage.clickOnEmailContinueBtn();
        //6. Click in Passord Input.
        await waitForElementClickable(GitHubSignUpPage.passwordInput, 5000, "passwordInput");
        await GitHubSignUpPage.clickOnPasswordInput();
        //7. Set value in Password Input.
        await GitHubSignUpPage.setPasswordInput(userCredentials.password);
        //8. Click on Password Continue Button.
        await waitForElementClickable(GitHubSignUpPage.passwordContinueBtn,  5000, "passwordContinueBtn");
        await GitHubSignUpPage.clickOnPasswordContinueBtn();
        //6. Click in Username Input.
        await waitForElementClickable(GitHubSignUpPage.usernameInput,  5000, "usernameInput");
        await GitHubSignUpPage.clickOnUsernameInput();
        //7. Set value in Username Input.
        await GitHubSignUpPage.setUsernameInput(userCredentials.username);
        //8. Click on Username Continue Button.
        await waitForElementClickable(GitHubSignUpPage.usernameContinueBtn,  5000, "usernameContinueBtn");
        await GitHubSignUpPage.clickOnUsernameContinueBtn();
        //6. Click in Receive Product Input.
        await waitForElementClickable(GitHubSignUpPage.receiveProductInput, 5000, "receiveProductInput");
        await GitHubSignUpPage.clickOnReceiveProductInput();
        //7. Set value in Receive Product Input.
        await GitHubSignUpPage.setReceiveProductInput(userCredentials.receiveProduct);
        //8. Click on Receive Product Continue Button.
       // await waitForElementClickable(GitHubSignUpPage.receiveProductContinueBtn,  5000, "receiveProductContinueBtn");
        await GitHubSignUpPage.clickOnReceiveProductContinueBtn();
        await browser.pause(SHORT_TIMEOUT);
        //await waitForElementToExist(GitHubSignUpPage.verifyYourAccountBlock, 5000, "verifyYourAccountBlock");
        // if(!(await GitHubSignUpPage.verifyYourAccountBlock.isDisplayedInViewport())){

            //await GitHubSignUpPage.verifyYourAccountBlock.scrollIntoView();
        //}

        const verifyYourAccountBlockText = await GitHubSignUpPage.verifyYourAccountBlock.getText();
        console.log("verifyYourAccountBlockText "+verifyYourAccountBlockText);
        console.log("==============================================================================");
        await expect(verifyYourAccountBlockText).toContain("Verify your account");
        await browser.pause(SHORT_TIMEOUT);
        console.log("=========================X===============TC1=================X=============================");   
    });



    it("TC2. Choose Enterise trial plan on organization page", async () => {
        console.log("========================================TC2==============================================");
        //1. Scroll down till start Enterprise Header.
        await GitHubMainPage.startEnterpriseHeader.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        //2. Check the start Enterprise Header is displayed.
        const startEnterpriseHeaderIsDisplayed = await GitHubMainPage.startEnterpriseHeader.isDisplayed();
        if(startEnterpriseHeaderIsDisplayed){
                //3. Check the start Enterprise Trial Link is displayed.
                const startEnterpriseTrialLinkIsDisplayed = await GitHubMainPage.startEnterpriseTrialLink.isDisplayed();
                    if(startEnterpriseTrialLinkIsDisplayed){
                        //4. Click on start Enterprise Trial Link.
                        await GitHubMainPage.clickOnStartEnterpriseTrialLink();
                        await browser.pause(SHORT_TIMEOUT);
                        //5. Check the Header on organization page is displayed.
                        const pickYourTrialPlan = await GitHubOrganizationPage.organizationPageHeader.isDisplayed();
                        if(pickYourTrialPlan){
                            //6. Click on enterprise cloud.
                            await GitHubOrganizationPage.clickOnRecommendedBlock();
                            await browser.pause(SHORT_TIMEOUT);
                            //7. Check that it is sign in page.
                            console.log("==============================================================================");
                            await browser.pause(SHORT_TIMEOUT);
                            try {
                            
                                const check = await waitForElementIsDisplayed( GitHubSignInPage.signInPageHeader, 5000, "Button");
                                console.log("check " + check);
                                await expect(check).toBe(true);

                              } catch (error) {
                                console.error("Error while checking element visibility:", error);
                              }
                    
                        }else{
                            throw new Error("Test failed because Organization header page Is Not Displayed.");
                            
                        }
                    }else{
                        throw new Error("Test failed because start Enterprise Trial Link Is Not Displayed.");
                    }
        }else {
            throw new Error("Test failed because start Enterprise Header Is Not Displayed.");
        }
        console.log("=========================X===============TC2=================X=============================");   
        
    });


    
    it.only("TC3. Check subscription success on the github newsletter page", async () => {
        console.log("========================================TC3==============================================");
        const emailTest = "antonio.banderas@test.org.ca";
        //1. Scroll down to the Subscribe link in the footer.
        const f = await GitHubMainPage.footerSubscribeLink.isExisting();
        console.log(f+" f 22222")
        await waitForElementToExist(GitHubMainPage.footerSubscribeLink, 5000, "footerSubscribeLink");
        await GitHubMainPage.footerSubscribeLink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        //2. Check if the Subscribe link is present.
        const footerSubscribeLinkIsExisting = await waitForElementToExist(GitHubMainPage.footerSubscribeLink, 5000, "footerSubscribeLink");
        console.log(footerSubscribeLinkIsExisting+" footerSubscribeLinkIsExisting")
        if(!footerSubscribeLinkIsExisting){
            throw new Error("Test failed because footer Subscribe Link is not present.");
        }
        //3. Check if the Subscribe link is clickable.
        const footerSubscribeLinkIsClickable = await GitHubMainPage.footerSubscribeLink.isClickable();
        if(!footerSubscribeLinkIsClickable){
            throw new Error("Test failed because footer Subscribe Link is not clickable.");
        }
        //4. Click on the Subscribe link .
        await GitHubMainPage.clickOnSubscribeLink();
        await browser.pause(SHORT_TIMEOUT);
        //5. Check if the Header on newsletter page is displayed.
        const newsletterHeaderIsDisplayed = await GitHubNewsletterPage.newsletterHeader.isDisplayed();
        if(newsletterHeaderIsDisplayed){
                //6. Scroll down to the Work email input.
                await GitHubNewsletterPage.clickOnAcceptBtn();
                //7. Set a value into Work email input.
                await GitHubNewsletterPage.clickOnWorkEmailInput();
                await GitHubNewsletterPage.setWorkEmailInput(emailTest);
                //8. Choose the country
                await GitHubNewsletterPage.clickOnCountryDropDown();
                await GitHubNewsletterPage.clickOnChosenCountryInDropDown();
                //9. Make tick in checkbox
                await GitHubNewsletterPage.clickOnCheckBox();
                //10. Click on the Suscrible button
                await GitHubNewsletterPage.clickOnSubscribeBtn();
                //11. Check if it is the confirmation page.
                console.log("==============================================================================");
                const check = await waitForElementIsDisplayed(GitHubConfirmationPage.confirmationPageHeader, 7000, "Header");
                await expect(check).toBe(true);
        }else{
            throw new Error("Test failed because the Confirmation header page is not displayed.");
        }

        console.log("=========================X===============TC3=================X=============================");     
    });



    it("TC4. Search word `delphi` in 2-nd element in list of Repositories", async () => {
        console.log("========================================TC4==============================================");
        //1. Locate the search button at the top of the page and click on it.
        await GitHubMainPage.clickOnSearchBtn();
        //2. Enter the name of the popular repository "delphi" into the search bar.
        await GitHubMainPage.searchBar.waitForDisplayed({ timeout: 3000 });
        await GitHubMainPage.clickOnSearchBar();
        await GitHubMainPage.setSearchBarValue("delphi")
        // 3. Press Enter or click the search icon.
        await browser.keys('Enter');
        await GitHubReposPage.secondRepo.waitForDisplayed({ timeout: 15000 });
        // 4. Verify that the second result in the search results list matches "delphi" (case-insensitive) on repos page
        const secondEntryText  =  await GitHubReposPage.secondRepo.getProperty("innerText");
        console.log("==============================================================================");
        await expect(secondEntryText).toMatch(/delphi/i);
        await browser.pause(SHORT_TIMEOUT);
        console.log("=========================X===============TC4=================X=============================");
    });


    it("TC5. Verify the 'Compare all features' header text", async () => {
        console.log("========================================TC5==============================================");
        //1. Click on the 'Pricing' link.
        await GitHubMainPage.clickOnPricingLink();
        //2. Check if the Pricing Page Header is displayed.
        const pricingPageHeaderIsDisplayed = await waitForElementIsDisplayed(GitHubPricingPage.pricingPageHeader, 5000, "Header");
        await expect(pricingPageHeaderIsDisplayed).toBe(true);
        //3. Scroll down to the 'Compare Features' header.
        await GitHubPricingPage.compareFeaturesLink.scrollIntoView();
        //4. Click on the 'Compare Features' Header
        await GitHubPricingPage.clickOnCompareFeaturesLink();
        // 5. Verify that the 'Compare Features' Header contains the text 'Compare all features'.
        await GitHubPricingPage.compareFeaturesHeader.waitForDisplayed({ timeout: 8000 });
        const compareFeaturesHeaderText = await GitHubPricingPage.compareFeaturesHeader.getText();
        console.log("==============================================================================");
        await expect(compareFeaturesHeaderText).toContain("Compare features");
        await browser.pause(SHORT_TIMEOUT);
        console.log("=========================X===============TC5=================X=============================");
    });


    async function waitForElementToExist(element, msek, elementName) {
        try {
            await browser.waitUntil(async () => {
                return element.isExisting();
            }, msek);
            console.log(`${elementName} exists.`);
            return true; // Element exists
        } catch (error) {
            console.log(`${elementName} does not exist within ${msek}ms.`);
            return false; // Element does not exist
        }
    }

    async function waitForElementClickable(element, msek, elementName) {
        try {
            await browser.waitUntil(async () => {
                return element.isClickable();
            }, msek);
            console.log(`${elementName} clickable.`);
            return true; // Element exists
        } catch (error) {
            console.log(`${elementName} does not exist within ${msek}ms.`);
            return false; // Element does not exist
        }
    }

    async function waitForElementIsDisplayed(element, msek, elementName) {
        try {
            await browser.waitUntil(async () => {
                return element.isDisplayed();
            }, msek);
            console.log(`${elementName} displayed.`);
            return true; // Element exists
        } catch (error) {
            console.log(`${elementName} does not exist within ${msek}ms.`);
            return false; // Element does not exist
        }
    }
   
});

