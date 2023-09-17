class DOUJobsPage {

    get znaityBtn(){return $("//*//form/input[@type='submit']")};
    get shvydkiyPerehid(){return $("//*//form/div[contains(text(),'Швидкий перехід:')]")};
    get relocateBtn(){return $("//header//a[@title='Relocate']")};

    async clickOnZnaityBtn(){
        await this.znaityBtn.click();  
    };

   
}

export default new DOUJobsPage();