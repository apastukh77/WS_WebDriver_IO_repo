class GitHubSignInPage {

    get signInPageHeader(){return $("//*[@id='login']/div[@class='auth-form-header p-0']/h1")};

}

export default new GitHubSignInPage();