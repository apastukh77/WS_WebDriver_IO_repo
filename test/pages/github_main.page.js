class GitHubMainPage {

    get pricingLink(){return $("//*/header//a[@href='/pricing']")};
    get signUpLink(){return $("//*/header//a[contains(text(),'Sign up')]")};
    get signInLink(){return $("//*/header//a[contains(text(),'Sign in')]")};
    get searchBtn(){return $("//*/button/span[@data-target]")};
    get searchBar(){return $("//*[@id='query-builder-test']")};
    get startEnterpriseHeader(){return $("//*/main//h2[contains(@class,'color-fg-default') and contains(text(), 'The place')]")};
    get startEnterpriseTrialLink(){return $("//*/div[@class = 'by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row']/a[contains(@data-analytics-event, 'Start a free')]")};
    get footerSubscribeLink(){return $("//*/footer//a[contains(text(),'Subscribe')]")};



    async clickOnPricingLink(){
        await this.pricingLink.click();  
    };

    async clickOnSignUpLink(){
        await this.signUpLink.click();  
    };

    async clickOnStartEnterpriseTrialLink(){
        await this.startEnterpriseTrialLink.click();  
    };

    async clickOnSubscribeLink(){
        await this.footerSubscribeLink.click();  
    };

    async clickOnSearchBtn(){
        await this.searchBtn.click();  
    };

    async clickOnSearchBar(){
        await this.searchBar.click();  
    };

    async setSearchBarValue(value){
        await this.searchBar.addValue(value);  
    };


}

export default new GitHubMainPage();