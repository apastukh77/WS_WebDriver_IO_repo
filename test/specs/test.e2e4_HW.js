import { expect } from '@wdio/globals'
import DOUMainPage from "./../pages/dou_main.page.js";
import DOUSalaryPage from "./../pages/dou_salary.page.js";
import DOUJobsPage from "./../pages/dou_jobs.page.js";
import DOURelocatePage from "./../pages/dou_relocate.page.js";

const SHORT_TIMEOUT = 2000;
const BASE_URL_DOU = "https://dou.ua/";

describe("DOU page", () => {

    beforeEach(async () => {
        await browser.url(BASE_URL_DOU);
        await browser.maximizeWindow();
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
        const isKvartylTextExist = await waitForElement(DOUSalaryPage.kvartylText, 5000, "kvartylText");
        if (isKvartylTextExist) {
            console.log("==============================================================================")
            await expect(await DOUSalaryPage.kvartylText.getText()).toContain("КВАРТИЛЬ");
            await browser.pause(SHORT_TIMEOUT);
        } else {
            throw new Error("Test failed because kvartylText Is Not Exist.");
        }
    });

    it("TC2. Verify that Search button is visible on Jobs page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnJobsLink();
        const isZnaityBtnExist = await waitForElement(DOUJobsPage.znaityBtn, 5000, "znaityBtn");
        //2. Verify that Search button is visible.
        if (isZnaityBtnExist) {
            console.log("==============================================================================")
            await expect(await DOUJobsPage.znaityBtn.isDisplayed()).toBe(true);
            await browser.pause(SHORT_TIMEOUT);
        } else {
            throw new Error("Test failed because isZnaityBtn Is Not Exist.");
        }
    });

    it.only("TC3. Verify that after click onSearch button text 'Швидкий перехід' is on jobs page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnJobsLink();
        const isZnaityBtnExist = await waitForElement(DOUJobsPage.znaityBtn, 5000, "znaityBtn");
        if (!isZnaityBtnExist) {
            throw new Error("Test failed because isZnaityBtn Is Not Exist.");
        }
        //2. Click on the search button
        await DOUJobsPage.clickOnZnaityBtn();
        //3. Verify that text 'Швидкий перехід' is on jobs page.
        console.log("==============================================================================")
        await expect(await DOUJobsPage.shvydkiyPerehid.getText()).toContain("Швидкий перехід");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC4. Verify that section with 'Новини' name is on relocate page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnRelocateLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Scroll down to element
        await DOURelocatePage.newsLink.scrollIntoView();
        //3. Verify that section with 'Новини' name is on relocate page.
        console.log("==============================================================================")
        await expect(await DOURelocatePage.newsLink.getText()).toContain("Новини");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC5. Verify that section with 'Блоги' name is on relocate page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnRelocateLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Scroll down to element
        await DOURelocatePage.blogsLink.scrollIntoView();
        //2. Verify that section with 'Новини' name is on relocate page.
        console.log("==============================================================================")
        await expect(await DOURelocatePage.blogsLink.getText()).toContain("Блоги");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC6. Verify that section with 'Популярне на форумі' name is on relocate page", async () => {
        //1. Click on the jobs link.
        await DOUMainPage.clickOnRelocateLink();
        await browser.pause(SHORT_TIMEOUT);
        //2. Scroll down to element
        await DOURelocatePage.popularLink.scrollIntoView();
        //2. Verify that section with 'Новини' name is on relocate page.
        console.log("==============================================================================")
        await expect(await DOURelocatePage.popularLink.getText()).toContain("Популярне на форумі");
        await browser.pause(SHORT_TIMEOUT);
    });

    async function waitForElement(element, msek, elementName) {
        try {
            await browser.waitUntil(
                () => element.isExisting(), msek);
            return true;
        } catch (error) {
            console.log(`${elementName} does not exist within ${msek}ms.`);
            return false;
        }
    }

});

