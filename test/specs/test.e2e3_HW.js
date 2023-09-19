import { expect } from '@wdio/globals'
import assert from 'assert/strict';

const SHORT_TIMEOUT = 2000;
const BASE_URL = "https://github.com/";
const GITHUB_LOGO_LOCATOR = "//a[@class='mr-lg-3 color-fg-inherit flex-order-2']";
const GITHUB_UNIVERSE_TEXT_LOCATOR = "//div[@class='text-semibold lh-condensed']";
const NAV_MENU_PRODUCT_BTN_LOCATOR = "//*/button[contains(text(), 'Product')]";
const NAV_MENU_PRODUCT_DROPDOWN_COPILOT_LOCATOR = "//*/div[@class='color-fg-default h4' and contains(text(), 'Copilot')]";
const SEARCH_BTN_LOCATOR = "//*/button/span[@data-target]";
const SEARCH_BAR_LOCATOR = "//*[@id='query-builder-test']";
const THIRD_ENTRY_LOCATOR = "//div[3]/div/div[contains(@class,'Box-sc')]/h3/div ";
const NAV_MENU_OPEN_SOURCE_BTN_LOCATOR = "//nav/ul/li[3]/button";
const NAV_MENU_OPEN_SOURCE_SUBMENU_TOPICS_LINK_LOCATOR = "//nav//a[@href='/topics']";
const TOPICS_PAGE_H1_LOCATOR = ".h1";
const SKRIPE_LOGO_LINK = "//*/div[contains(@class,'d-flex flex-wrap flex-justify-around')]/img[1]";
const PINTEREST_LOGO_LINK = "//*/div[contains(@class,'d-flex flex-wrap flex-justify-around')]/img[2]";
const KPMG_LOGO_LINK = "//*/div[contains(@class,'d-flex flex-wrap flex-justify-around')]/img[3]";
const MERCEDES_BENZ_LOGO_LINK = "//*/div[contains(@class,'d-flex flex-wrap flex-justify-around')]/img[4]";
const PG_LOGO_LINK = "//*/div[contains(@class,'d-flex flex-wrap flex-justify-around')]/img[5]";
const TELUS_LOGO_LINK = "//*/div[contains(@class,'d-flex flex-wrap flex-justify-around')]/img[6]";

describe.skip("GitHub main page", () => {

    beforeEach(async () => {
        await browser.url(BASE_URL);
        await browser.maximizeWindow();
        await browser.pause(SHORT_TIMEOUT);
    });

    afterEach(async () => {
        // Delete all cookies
        await browser.deleteCookies();
        await browser.pause(SHORT_TIMEOUT);
    });


    it("TC1. Verify GitHub Logo Link from homegage", async () => {
        //1. Click on the GitHub logo in the top-left corner.
        const logoBtn = await $(GITHUB_LOGO_LOCATOR);
        await logoBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        //2. Verify that the text 'GitHub Universe: Dive in to AI, security, and DevEx' is present on the GitHub home page.
        const githubUniverse = await $(GITHUB_UNIVERSE_TEXT_LOCATOR);
        let githubUniverseText = await githubUniverse.getText();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(githubUniverseText).toBe("GitHub Universe: Dive in to AI, security, and DevEx");
        await browser.pause(SHORT_TIMEOUT);
    });

    it("TC2. Verify GitHub Logo Link from internal page https://github.com/features/copilot", async () => {
        //1. Navigate to Product Button in the Header and click on it.
        const productBtn = await $(NAV_MENU_PRODUCT_BTN_LOCATOR);
        await productBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        //2. Navigate to Capilot in Dropdown menu and click on it.
        const copilotLink = await $(NAV_MENU_PRODUCT_DROPDOWN_COPILOT_LOCATOR);
        await copilotLink.click();
        await browser.pause(SHORT_TIMEOUT);
        //3. Locate the GitHub logo link on the page (https://github.com/features/copilot)
        const copilitUrl = await browser.getUrl();
        await browser.pause(SHORT_TIMEOUT);
        assert.strictEqual(copilitUrl, "https://github.com/features/copilot", "Expected page is `https://github.com/features/copilot`");
        await browser.pause(SHORT_TIMEOUT);
        //4. Click on the GitHub logo link.
        const logoBtn = await $(GITHUB_LOGO_LOCATOR);
        await logoBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        //5. Verify that the text 'GitHub Universe: Dive in to AI, security, and DevEx' is present on the GitHub home page.
        const githubUniverse = await $(GITHUB_UNIVERSE_TEXT_LOCATOR);
        let githubUniverseText = await githubUniverse.getText();
        await browser.pause(SHORT_TIMEOUT);
        console.log("==============================================================================")
        await expect(githubUniverseText).toBe("GitHub Universe: Dive in to AI, security, and DevEx");
        await browser.pause(SHORT_TIMEOUT);
    });


    it("TC3. Search for a Repository `nodejs`", async () => {
        //1. Locate the search button at the top of the page and click on it.
        const searchBtn = await $(SEARCH_BTN_LOCATOR);
        await searchBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        //2. Enter the name of the popular repository "nodejs" into the search bar.
        const searchBar = await $(SEARCH_BAR_LOCATOR);
        await searchBar.waitForDisplayed({ timeout: 5000 });
        await browser.pause(SHORT_TIMEOUT);
        await searchBar.click();
        await searchBar.setValue("nodejs")
        // 3. Press Enter or click the search icon.
        await browser.keys('Enter');
        await browser.pause(SHORT_TIMEOUT);
        // 4. Verify that the third result in the search results list matches "nodejs"
        const thirdEntry = await $(THIRD_ENTRY_LOCATOR);
        const thirdEntryText = await thirdEntry.getProperty("innerText");
        console.log("==============================================================================")
        await expect(thirdEntryText).toMatch("/nodejs/i");
        await browser.pause(SHORT_TIMEOUT);
    });


    it("TC4. Explore GitHub Topics", async () => {

        //1. Click on the "Open Source" menu in the top navigation.
        const openSourceBtn = await $(NAV_MENU_OPEN_SOURCE_BTN_LOCATOR);

        await openSourceBtn.click();
        await browser.pause(SHORT_TIMEOUT);
        // 2. Select "Topics" from the dropdown and click on it.
        const topicsLink = await $(NAV_MENU_OPEN_SOURCE_SUBMENU_TOPICS_LINK_LOCATOR);
        await topicsLink.click();
        await browser.pause(SHORT_TIMEOUT);
        //3. Verify that the "Topics" header is available on the page.
        const topicsH1 = await $(TOPICS_PAGE_H1_LOCATOR);
        await topicsH1.waitForDisplayed({ timeout: 5000 });

        const topicsH1Text = await topicsH1.getText();
        console.log("==============================================================================")
        await expect(topicsH1Text).toContain("Topics");
        await browser.pause(SHORT_TIMEOUT);
    });


    it("TC5. Check availableness 6 logos-links in the 'Trusted by the World’s Leading Organizations' Block", async () => {
        // 1. Scroll down to the "Trusted by the World’s Leading Organizations" Block
        let counter = 0;
        const stripeLogoLink = await $(SKRIPE_LOGO_LINK);

        await stripeLogoLink.scrollIntoView();
        await browser.pause(SHORT_TIMEOUT);
        //  2. Check the number of logos links inside the block
        if (stripeLogoLink.isDisplayed()) {
            counter++;
            const stripeAttr = await stripeLogoLink.getAttribute("src");
            await expect(stripeAttr).toContain('https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg');
        };
        const pinterestLogoLink = await $(PINTEREST_LOGO_LINK);
        if (pinterestLogoLink.isDisplayed()) {
            counter++;
            console.log("counter " + counter);
            const pinterestAttr = await pinterestLogoLink.getAttribute("src");
            await expect(pinterestAttr).toContain('https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg');
        };
        const kpmgLogoLink = await $(KPMG_LOGO_LINK);
        if (kpmgLogoLink.isDisplayed()) {
            counter++;
            const kpmgAttr = await kpmgLogoLink.getAttribute("src");
            await expect(kpmgAttr).toContain('https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg');
        };
        const mersLogoLink = await $(MERCEDES_BENZ_LOGO_LINK);
        if (mersLogoLink.isDisplayed()) {
            counter++;
            const mersAttr = await mersLogoLink.getAttribute("src");
            await expect(mersAttr).toContain('https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg');
        };
        const pgLogoLink = await $(PG_LOGO_LINK);
        if (pgLogoLink.isDisplayed()) {
            counter++;
            const pgAttr = await pgLogoLink.getAttribute("src");
            await expect(pgAttr).toContain('https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg');
        };
        const telusLogoLink = await $(TELUS_LOGO_LINK);
        if (telusLogoLink.isDisplayed()) {
            counter++;
            const telusAttr = await telusLogoLink.getAttribute("src");
            await expect(telusAttr).toContain('https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg');
        };
        console.log("==============================================================================")
        assert(counter === 6, "Nope. Must be 6.")
        await browser.pause(SHORT_TIMEOUT);
    });





});

