import { expect } from '@wdio/globals'
import DOUMainPage from "./../pages/dou_main.page.js";
import DOUSalaryPage from "./../pages/dou_salary.page.js";
import DOUJobsPage from "./../pages/dou_jobs.page.js";
import DOURelocatePage from "./../pages/dou_relocate.page.js";

import assert from 'assert/strict';

 const SHORT_TIMEOUT = 2000;
 const BASE_URL_DOU = "https://dou.ua/";


describe.skip("DOU page", () => {

    beforeEach(async () => {
        await browser.url(BASE_URL_DOU);
        await browser.pause(SHORT_TIMEOUT);
    });



    afterEach(async () => {
        // Delete all cookies
        await browser.deleteCookies();
        await browser.pause(SHORT_TIMEOUT);
    });


    it("TC1. Verify that text 'КВАРТИЛЬ' is on salary page", async () => {
        //1. Click on the Salary link.
        await DOUMainPage.clickOnSalaryLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Verify that the text 'КВАРТИЛЬ' is present on the salary page.
        const kvartylText = await DOUSalaryPage.kvartylText.getText();
        console.log("==============================================================================")
        await expect(kvartylText).toContain("КВАРТИЛЬ");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC2. Verify that Search button is visible on Jobs page", async () => {
         //1. Click on the jobs link.
         await DOUMainPage.clickOnJobsLink();
         await browser.pause(SHORT_TIMEOUT);
        //2. Verify that Search button is visible.
        const isZnaityBtnDisplayed = await DOUJobsPage.znaityBtn.isDisplayed();
        console.log("==============================================================================")
        await expect(isZnaityBtnDisplayed).toBe(true);
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC3. Verify that after click onSearch button text 'Швидкий перехід' is on jobs page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnJobsLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Click on the search button
        await DOUJobsPage.clickOnZnaityBtn();
        await browser.pause(SHORT_TIMEOUT);
       //3. Verify that text 'Швидкий перехід' is on jobs page.
       const shvydkiyPerehidText = await DOUJobsPage.shvydkiyPerehid.getText();
       console.log("==============================================================================")
       await expect(shvydkiyPerehidText).toContain("Швидкий перехід");
       await browser.pause(SHORT_TIMEOUT);
   });


    it("TC4. Verify that section with 'Новини' name is on relocate page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnRelocateLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Scroll down to element
        await DOURelocatePage.newsLink.scrollIntoView();
        //3. Verify that section with 'Новини' name is on relocate page.
        const newsText = await DOURelocatePage.newsLink.getText();
        console.log("==============================================================================")
        await expect(newsText).toContain("Новини");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC5. Verify that section with 'Блоги' name is on relocate page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnRelocateLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Scroll down to element
        await DOURelocatePage.blogsLink.scrollIntoView();
        //2. Verify that section with 'Новини' name is on relocate page.
        const blogsText = await DOURelocatePage.blogsLink.getText();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(blogsText).toContain("Блоги");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC6. Verify that section with 'Популярне на форумі' name is on relocate page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnRelocateLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Scroll down to element
        await DOURelocatePage.popularLink.scrollIntoView();
        //2. Verify that section with 'Новини' name is on relocate page.
        const popularText = await DOURelocatePage.popularLink.getText();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(popularText).toContain("Популярне на форумі");
        await browser.pause(SHORT_TIMEOUT);
    });

  
    

    
   
});

