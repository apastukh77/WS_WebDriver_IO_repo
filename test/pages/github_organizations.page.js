class GitHubOrganizationPage {

    get organizationPageHeader(){return $(".h1")};
    get recommendedBlock(){return $("//main//a/div[@class='rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan']/div")};

    async clickOnRecommendedBlock(){
        await this.recommendedBlock.click();  
    };



}

export default new GitHubOrganizationPage();