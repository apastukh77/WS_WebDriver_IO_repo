class GitHubPricingPage {

    get pricingPageHeader(){return $("//h1[@class='h2-mktg']")};
    get compareFeaturesLink(){return $("//a[@href='#compare-features']")};
    get compareFeaturesHeader(){return $(".h1")};

    async clickOnCompareFeaturesLink(){
        await this.compareFeaturesLink.click();  
    };



}

export default new GitHubPricingPage();