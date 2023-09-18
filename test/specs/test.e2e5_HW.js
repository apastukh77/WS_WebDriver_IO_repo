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
        await browser.pause(SHORT_TIMEOUT);
    });


    afterEach(async () => {
        // Delete all cookies
        await browser.deleteCookies();
        await browser.pause(SHORT_TIMEOUT);
    });


    it("TC1. Sign up using user credentials on sign up page", async () => {

        const userCredentials = {
            email: "antonio.banderas@test.org.ca",
            password: "testtest1!Q",
            username: "antonio-banderasTest",
            receiveProduct: "y",
        };

        //1. Click on the Sign up link.
        await GitHubMainPage.clickOnSignUpLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Click on Sign Up Content Container on the sign up page.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.signUpContentContainer).isExisting();
        }, 5000, "signUpContentContainer is not existing");  
        await GitHubSignUpPage.clickOnSignUpContentContainer();
        //3. Click in Email Input.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.emailInput).isClickable();
        }, 5000, "emailInput is not clickable"); 
        await GitHubSignUpPage.clickOnEmailInput();
        //4. Set value in Email Input.
        await GitHubSignUpPage.setEmailInput(userCredentials.email);
        //5. Click on Email Continue Button.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.emailContinueBtn).isClickable();
        }, 5000, "emailContinueBtn is not clickable"); 
        await GitHubSignUpPage.clickOnEmailContinueBtn();
        //6. Click in Passord Input.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.passwordInput).isClickable();
        }, 5000, "passwordInput is not clickable"); 
        await GitHubSignUpPage.clickOnPasswordInput();
        //7. Set value in Password Input.
        await GitHubSignUpPage.setPasswordInput(userCredentials.password);
        //8. Click on Password Continue Button.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.passwordContinueBtn).isClickable();
        }, 5000, "passwordContinueBtn is not clickable"); 
        await GitHubSignUpPage.clickOnPasswordContinueBtn();
        //6. Click in Username Input.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.usernameInput).isClickable();
        }, 5000, "usernameInput is not clickable"); 
        await GitHubSignUpPage.clickOnUsernameInput();
        //7. Set value in Username Input.
        await GitHubSignUpPage.setUsernameInput(userCredentials.username);
        //8. Click on Username Continue Button.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.usernameContinueBtn).isClickable();
        }, 5000, "usernameContinueBtn is not clickable"); 
        await GitHubSignUpPage.clickOnUsernameContinueBtn();
        //6. Click in Receive Product Input.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.receiveProductInput).isClickable();
        }, 5000, "receiveProductInput is not clickable"); 
        await GitHubSignUpPage.clickOnReceiveProductInput();
        //7. Set value in Receive Product Input.
        await GitHubSignUpPage.setReceiveProductInput(userCredentials.receiveProduct);
        //8. Click on Receive Product Continue Button.
        await browser.waitUntil( async () => {
            return (await GitHubSignUpPage.receiveProductContinueBtn).isClickable();
        }, 5000, "receiveProductContinueBtn is not clickable"); 
        await GitHubSignUpPage.clickOnReceiveProductContinueBtn();
        await browser.pause(SHORT_TIMEOUT);
        const verivyYourAccountBlockText = await GitHubSignUpPage.verivyYourAccountBlock.getText();
        console.log("==============================================================================");
        await expect(verivyYourAccountBlockText).toContain("Verify your account");
        await browser.pause(SHORT_TIMEOUT);
    });



    xit("TC2. Choose Enterise trial plan on organization page", async () => {
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
                            console.log("==============================================================================")
                            await browser.pause(SHORT_TIMEOUT);
                            try {
                            
                                const check = await browser.waitUntil( async () => {
                                    return (await GitHubSignInPage.signInPageHeader.isDisplayed());
                                }, 5000, "Button is not displayed");    

                                console.log("check " + check);
                                await expect(check).toBe(true);

                              } catch (error) {
                                console.error("Error while checking element visibility:", error);
                              }
                    
                        }else{
                            console.log(" Organization header page Is Not Displayed");
                            throw new Error("Test failed because Organization header page Is Not Displayed.");
                            
                        }
                    }else{
                        console.log("start Enterprise Trial Link Is Not Displayed");
                        throw new Error("Test failed because start Enterprise Trial Link Is Not Displayed.");
                    }
        }else {
            console.log("start Enterprise Header Is Not Displayed");
            throw new Error("Test failed because start Enterprise Header Is Not Displayed.");
        }
    
        
    });


    
    xit("TC3. Check subscription success on the github newsletter page", async () => {

        //1. Scroll down till Subscribe link in the footer.
        await GitHubMainPage.footerSubscribeLink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        //2. Check the Subscribe link is present.
        const footerSubscribeLinkIsExisting = await browser.waitUntil( async () => {
                 return ( await GitHubMainPage.footerSubscribeLink.isExisting());
         }, 5000, "Link is not displayed");

        if(footerSubscribeLinkIsExisting){
                //3. Check the Subscribe link is clickable.
                const footerSubscribeLinkIsClickable = await GitHubMainPage.footerSubscribeLink.isClickable();
                    if(footerSubscribeLinkIsClickable){
                        //4. Click on the Subscribe link .
                        await GitHubMainPage.clickOnSubscribeLink();
                        await browser.pause(SHORT_TIMEOUT);
                        //5. Check the Header on newsletter page is displayed.
                        const newsletterHeaderIsDisplayed = await GitHubNewsletterPage.newsletterHeader.isDisplayed();
                        if(newsletterHeaderIsDisplayed){
                            //6. Scroll till Work email input.
                            await GitHubNewsletterPage.clickOnAcceptBtn();
                            //7. Set value into Work email input.
                            await GitHubNewsletterPage.clickOnWorkEmailInput();
                            await GitHubNewsletterPage.setWorkEmailInput("antonio.banderas@test.org.ca");
                            //8. Choose the country
                            await GitHubNewsletterPage.clickOnCountryDropDown();
                            await GitHubNewsletterPage.clickOnChosenCountryInDropDown();
                            //9. Make tick in checkbox
                            await GitHubNewsletterPage.clickOnCheckBox();
                            //10. Click on Suscrible button
                            await GitHubNewsletterPage.clickOnSubscribeBtn();
                            //11. Check that it is confirmation page.
                            console.log("==============================================================================")
                            const check = await browser.waitUntil( async () => {
                                return (await GitHubConfirmationPage.confirmationPageHeader.isDisplayed());
                            }, 5000, "Header is not displayed");
                            await expect(check).toBe(true);
                        }else{
                            console.log(" Newsletter header page Is Not Displayed");
                            throw new Error("Test failed because Newsletter header page Is Not Displayed.");
                        }
                    }else{
                        console.log("footer Subscribe Link Is Not Clickable");
                        throw new Error("Test failed because footer Subscribe Link Is Not Clickable.");
                    }
        }else {
            console.log("footer Subscribe Link Is Not Present");
            throw new Error("Test failed because footer Subscribe Link Is Not Present.");
        }
    
        
    });



    xit("TC4. Search word `delphi` in 2-nd element in list of Repositories", async () => {
        //1. Locate the search button at the top of the page and click on it.
        await GitHubMainPage.clickOnSearchBtn();
        //2. Enter the name of the popular repository "delphi" into the search bar.
        await GitHubMainPage.searchBar.waitForDisplayed({ timeout: 3000 });
        await GitHubMainPage.clickOnSearchBar();
        await GitHubMainPage.setSearchBarValue("delphi")
        // 3. Press Enter or click the search icon.
        await browser.keys('Enter');
        await browser.pause(SHORT_TIMEOUT);
        // 4. Verify that the third result in the search results list matches "delphi" on repos page
        const thirdEntryText  =  await GitHubReposPage.secondRepo.getProperty("innerText");
        console.log("==============================================================================")
        await expect(thirdEntryText).toMatch(/delphi/i);
        await browser.pause(SHORT_TIMEOUT);
    });


    xit("TC5. Verify the compare Features Header is having  text 'Compare all features'", async () => {
        //1. Click on pricing link.
        await GitHubMainPage.clickOnPricingLink();
        //2. Check the Pricing Page Header in pricing page.
        const pricingPageHeaderIsDisplayed = await browser.waitUntil( async () => {
            return (await GitHubPricingPage.pricingPageHeader.isDisplayed());
        }, 5000, "Header is not displayed");
        await expect(pricingPageHeaderIsDisplayed).toBe(true);
        //3. Scroll down till compare Features header is displayed
        await GitHubPricingPage.compareFeaturesLink.scrollIntoView();
        //4. Click on compare Features Header
        await GitHubPricingPage.clickOnCompareFeaturesLink();
        // 5. Verify the compare Features Header is having  text 'Compare all features'
        const compareFeaturesHeaderText = await GitHubPricingPage.compareFeaturesHeader.getText();
        console.log("==============================================================================")
        await expect(compareFeaturesHeaderText).toContain("Compare features");
        await browser.pause(SHORT_TIMEOUT);
    });


    

    
   
});

