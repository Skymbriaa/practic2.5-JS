class Book{
    constructor(title, outhor, gender, yearCreate) {
        this.title = title;
        this.outhor = outhor;
        this.gender = gender;
        this.yearCreate = yearCreate;
    }
    getInfo() {
        return `${this.title} ${this.outhor} ${this.gender} 
        ${this.yearCreate}`;
    }
}

const userBook = new Book('Dont bully me Nagatoro-san', 'Nanashi', 'Manga', '2017')