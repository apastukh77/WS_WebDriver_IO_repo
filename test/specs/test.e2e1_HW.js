import { expect } from '@wdio/globals'

const SHORT_TIMEOUT = 1000;
const BASE_URL = "https://webdriver.io";
const API_HEADER_LINK = "//header/h1";
const BREADCRUMBS_LINK = "//nav/ul/li[@class='breadcrumbs__item breadcrumbs__item--active']/span";
const WEBDRIVER_LINK = "//div/p/a[@href='/docs/api/webdriver']";
const SEARCH_BTN = ".DocSearch-Button-Placeholder";
const DOC_SEARCH_INPUT = "//*[@id='docsearch-input']";
const DOC_SEARCH_INPUT_CLOSE_BTN = "//header/form/button[@title='Clear the query'and @class='DocSearch-Reset']";

describe.skip("Webdriverio main page", () => {

    beforeEach(async () => {
        await browser.url(BASE_URL + `/docs/api/`);
        await browser.pause(SHORT_TIMEOUT);
    });

    afterEach(async () => {
        // Delete all cookies
        await browser.deleteCookies();
        await browser.pause(SHORT_TIMEOUT);
    });

    it("should check url", async () => {
        const wdio_api_url = await browser.getUrl();
        console.log("==============================================================================")
        await expect(browser).toHaveUrl(BASE_URL + "/docs/api/");
    });


    it("should check getText from h1", async () => {
        const wdioApiHeaderLink = await $(API_HEADER_LINK);
        const wdioApiHeaderLinkText = await wdioApiHeaderLink.getText();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(wdioApiHeaderLinkText).toBe("Introduction");
    });


    it("should check getText from breadCrumbs", async () => {
        const wdioBreadCrumbs = await $(BREADCRUMBS_LINK);
        const wdioBreadCrumbsText = await wdioBreadCrumbs.getText();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(wdioBreadCrumbsText).toBe("Introduction");
    });


    it("should check getAttribute href for link", async () => {
        const wdioLinkWebDriver = await $(WEBDRIVER_LINK);
        const wdioLinkWebDriverAttrHref = await wdioLinkWebDriver.getAttribute('href');
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(wdioLinkWebDriverAttrHref).toBe("/docs/api/webdriver");
    });

    it("should click on search input, enter text and delete it", async () => {
        const wdioSearchBtn = await $(SEARCH_BTN);
        await wdioSearchBtn.click();

        let wdioApiSearchInputOfModalWindow = await $(DOC_SEARCH_INPUT);
        await wdioApiSearchInputOfModalWindow.waitForDisplayed({ timeout: SHORT_TIMEOUT });

        await wdioApiSearchInputOfModalWindow.setValue("Hi, Alex!");
        let wdioApiSearchInputOfModalWindowValue = await wdioApiSearchInputOfModalWindow.getValue();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(wdioApiSearchInputOfModalWindowValue).toBe("Hi, Alex!");
        // Delete text
        let wdioApiSearchInputOfModalWindowCloseBtn = await $(DOC_SEARCH_INPUT_CLOSE_BTN);
        await wdioApiSearchInputOfModalWindowCloseBtn.click();
        wdioApiSearchInputOfModalWindowValue = await wdioApiSearchInputOfModalWindow.getValue();
        console.log("==============================================================================")
        await expect(wdioApiSearchInputOfModalWindowValue).toBe("");
        await browser.pause(SHORT_TIMEOUT);
        // Check if the Clear button is not present
        wdioApiSearchInputOfModalWindowCloseBtn = !(await $(DOC_SEARCH_INPUT_CLOSE_BTN));
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(wdioApiSearchInputOfModalWindowCloseBtn).toBe(false);

    });


});

