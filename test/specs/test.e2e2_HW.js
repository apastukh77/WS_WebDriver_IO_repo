import { expect } from '@wdio/globals'

const SHORT_TIMEOUT = 2000;
const BASE_URL = "https://webdriver.io";
const HEADER_API_BTN_LOCATOR = "//nav/div/div/a[@href='/docs/api']";
const FOOTER_API_LINK_LOCATOR = "//footer/div/div/div/ul/li/a[@href='/docs/api']";
const API_PROTOCOLS_LINK_LOCATOR = "//main//div/nav/a[@href='/docs/api/protocols']";
const WEBDRIVER_PROTOCOL_H2_HEADER_LOCATOR = "//*[@id='webdriver-protocol']";

describe.skip("Webdriverio main page", () => {

    beforeEach(async () => {
        await browser.url(BASE_URL);
        await browser.pause(SHORT_TIMEOUT);
    });

    afterEach(async () => {
        // Delete all cookies
        await browser.deleteCookies();
        await browser.pause(SHORT_TIMEOUT);
    });

    it("should footer API Link Is Displayed", async () => {
        const headerAPIBtn = await $(HEADER_API_BTN_LOCATOR);

        await headerAPIBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        const footerAPILink = await $(FOOTER_API_LINK_LOCATOR);
        await footerAPILink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        let footerAPILinkIsDisplayed = await browser.waitUntil(async () => {
            return $(FOOTER_API_LINK_LOCATOR).isDisplayedInViewport();
        }, 5000, "footer API Link is not displayed");
        console.log("==============================================================================")
        await expect(footerAPILinkIsDisplayed).toBe(true);
        await browser.pause(SHORT_TIMEOUT);
    });

    it("should footer API Link Is Enabled", async () => {
        const headerAPIBtn = await $(HEADER_API_BTN_LOCATOR);

        await headerAPIBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        const footerAPILink = await $(FOOTER_API_LINK_LOCATOR);
        await footerAPILink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        let footerAPILinkIsEnabled = await footerAPILink.isEnabled();
        console.log("==============================================================================")
        await expect(footerAPILinkIsEnabled).toBe(true);
        await browser.pause(SHORT_TIMEOUT);
    });

    it("should API Protocols Link is Displayed", async () => {
        const headerAPIBtn = await $(HEADER_API_BTN_LOCATOR);

        await headerAPIBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        const footerAPILink = await $(FOOTER_API_LINK_LOCATOR);
        await browser.pause(SHORT_TIMEOUT);
        await footerAPILink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        await browser.waitUntil(async () => {
            return $(FOOTER_API_LINK_LOCATOR).isDisplayedInViewport();
        }, 5000, "footer API Link is not displayed");

        const apiProtocol = await $(API_PROTOCOLS_LINK_LOCATOR);
        const apiProtocolisDisplayed = await apiProtocol.isDisplayed();
        console.log("==============================================================================")
        await expect(apiProtocolisDisplayed).toBe(true);
        await browser.pause(SHORT_TIMEOUT);
    });



    it("should API Protocols Link is Clickable", async () => {
        const headerAPIBtn = await $(HEADER_API_BTN_LOCATOR);

        await headerAPIBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        const footerAPILink = await $(FOOTER_API_LINK_LOCATOR);
        await browser.pause(SHORT_TIMEOUT);
        await footerAPILink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        await browser.waitUntil(async () => {
            return $(FOOTER_API_LINK_LOCATOR).isDisplayedInViewport();
        }, 5000, "footer API Link is not displayed");

        const apiProtocol = await $(API_PROTOCOLS_LINK_LOCATOR);
        const apiProtocolisClickable = await apiProtocol.isClickable();
        console.log("==============================================================================")
        await expect(apiProtocolisClickable).toBe(true);
        await browser.pause(SHORT_TIMEOUT);
    });



    it("should geting HTML API Protocols Link", async () => {
        const headerAPIBtn = await $(HEADER_API_BTN_LOCATOR);

        await headerAPIBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        const footerAPILink = await $(FOOTER_API_LINK_LOCATOR);
        await browser.pause(SHORT_TIMEOUT);
        await footerAPILink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        await browser.waitUntil(async () => {
            return $(FOOTER_API_LINK_LOCATOR).isDisplayedInViewport();
        }, 5000, "footer API Link is not displayed");

        const apiProtocol = await $(API_PROTOCOLS_LINK_LOCATOR);
        const getHTMLOfApiProtocol = await apiProtocol.getHTML();
        console.log("==============================================================================")
        await expect(getHTMLOfApiProtocol).toContain('href="/docs/api/protocols');
        await browser.pause(SHORT_TIMEOUT);
    });

    it("should geting Header h2 of WebDriver Protocol page", async () => {
        const headerAPIBtn = await $(HEADER_API_BTN_LOCATOR);

        await headerAPIBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        const footerAPILink = await $(FOOTER_API_LINK_LOCATOR);
        await browser.pause(SHORT_TIMEOUT);
        await footerAPILink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        await browser.waitUntil(async () => {
            return $(FOOTER_API_LINK_LOCATOR).isDisplayedInViewport();
        }, 5000, "footer API Link is not displayed");

        const apiProtocol = await $(API_PROTOCOLS_LINK_LOCATOR);
        await apiProtocol.click();
        let webdriverProtocolH2IsDisplayed = await browser.waitUntil(async () => {
            return $(WEBDRIVER_PROTOCOL_H2_HEADER_LOCATOR).isDisplayed();
        }, 5000, "WEBDRIVER PROTOCOL H2 HEADER is not displayed");
        console.log("==============================================================================")
        await expect(webdriverProtocolH2IsDisplayed).toBe(true);
        await browser.pause(SHORT_TIMEOUT);
    });




});

