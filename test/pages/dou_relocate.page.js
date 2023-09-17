class DOURelocatePage {

    get newsLink(){return $("//div/h3/a[text()='Новини']")};
    get blogsLink(){return $("//div/h3/a[text()='Блоги']")};
    get popularLink(){return $("//div/h3/a[text()='Популярне на форумі']")};


}

export default new DOURelocatePage();