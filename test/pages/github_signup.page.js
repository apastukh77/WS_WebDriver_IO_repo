class GitHubSignUpPage {

    get signUpContentContainer(){return $("//*/main//div[contains(@class,'signup-content-container')]")};
    get emailInput(){return $("//*[@id='email']")};
    get emailContinueBtn(){return $("//*/button[contains(@data-optimizely-event,'email')]")};
    get passwordInput(){return $("//*[@id='password']")};
    get passwordContinueBtn(){return $("//*/button[contains(@data-optimizely-event,'password')]")};
    get usernameInput(){return $("//*[@id='login']")};
    get usernameContinueBtn(){return $("//*/button[contains(@data-optimizely-event,'username')]")};
    get receiveProductInput(){return $("//*[@id='opt_in']")};
    get receiveProductContinueBtn(){return $("//*/button[contains(@data-optimizely-event,'opt-in')]")};
    get verifyYourAccountBlock(){return $("//*[@id='captcha-and-submit-container']/div[@class='text-mono text-bold signup-text-prompt mt-4']")};
   
    
   

    async clickOnSignUpContentContainer(){
        await this.signUpContentContainer.click();  
    };

    async clickOnEmailInput(){
        await this.emailInput.click();  
    };

    async clickOnPasswordInput(){
        await this.passwordInput.click();  
    };

    async clickOnUsernameInput(){
        await this.usernameInput.click();  
    };

    async clickOnReceiveProductInput(){
        await this.receiveProductInput.click();  
    };
//----------------------------------------------------
    async setEmailInput(value){
        await this.emailInput.addValue(value);  
    };

    async setPasswordInput(value){
        await this.passwordInput.addValue(value);  
    };

    async setUsernameInput(value){
        await this.usernameInput.addValue(value);  
    };

    async setReceiveProductInput(value){
        await this.receiveProductInput.addValue(value);  
    };

    //----------------------------------------------------
    async clickOnEmailContinueBtn(){
        await this.emailContinueBtn.click();  
    };

    async clickOnPasswordContinueBtn(){
        await this.passwordContinueBtn.click();  
    };

    async clickOnUsernameContinueBtn(){
        await this.usernameContinueBtn.click();  
    };

    async clickOnReceiveProductContinueBtn(){
        await this.receiveProductContinueBtn.click();  
    };


}

export default new GitHubSignUpPage();