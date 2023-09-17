class GitHubNewsletterPage {

    get newsletterHeader(){return $("//*[@id='hero-section-brand-heading']")};
    get workEmailInput(){return $("//*[@id=':R8d7m:']")};
    get countryDropDown(){return $("//*[@id='country']")};
    get chosenCountryInDropDown(){return $("//*[@id='country']/option[@value='RO']")};
    get checkBox(){return $("//*[@id='gated-agree-marketingEmailOptin1']")};
    get subscribeBtn(){return $("//*[@id='form']/form/div/button")};
    get acceptButton(){return $("//*[@id='wcpConsentBannerCtrl']/div[2]/button[1]")};

    

    async clickOnWorkEmailInput(){
        await this.workEmailInput.click();  
    };

    async setWorkEmailInput(value){
        await this.workEmailInput.addValue(value);  
    };

    async clickOnCountryDropDown(){
        await this.countryDropDown.click();  
    };

    async clickOnChosenCountryInDropDown(){
        await this.chosenCountryInDropDown.click();  
    };

    async clickOnCheckBox(){
        await this.checkBox.click();  
    };

    async clickOnSubscribeBtn(){
        await this.subscribeBtn.click();  
    };

    async clickOnAcceptBtn(){
        await this.acceptButton.click();  
    };



}

export default new GitHubNewsletterPage();