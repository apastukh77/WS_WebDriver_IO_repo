class DOUMainPage {

    get salaryLink(){return $("//header//a[@href='https://jobs.dou.ua/salaries/']")};
    get jobsLink(){return $("//header//a[@href='https://jobs.dou.ua/']")};
    get relocateLink(){return $("//header/div/a[contains(@class, '__relocate')]")};

    async clickOnSalaryLink(){
        await this.salaryLink.click();  
    };

    async clickOnJobsLink(){
        await this.jobsLink.click();  
    };

    async clickOnRelocateLink(){
        await this.relocateLink.click();  
    };


}

export default new DOUMainPage();