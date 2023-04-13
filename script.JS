let myLibrary = [];

// function Book (title,author,pages,status){
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.status = status
//     this.infoA = function() {
//         console.log(title + " " + author)
//     }
// }

// const theHobbit = new Book("The Hobbit","JRR","255","read")
// theHobbit.infoA()

function newBook() {
}

newBook.prototype.info = function() {
    return(`${this.title}, ${this.author}, ${this.pages} pages, ${this.status}`)
}

function newTitle(title,author,pages,status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

newTitle.prototype = Object.create(newBook.prototype)

const theHobbit2 = new newTitle("The Hobbit 2","JRR","255","read")

// theHobbit2.info()
myLibrary.push(theHobbit2)
myLibrary.push(theHobbit2)

let bookDiv = document.querySelector(".book")



function addBooks(){
    const theHobbit3 = new newTitle("A","JRR","255","read")
    myLibrary.push(theHobbit3)
    for(let i = 0; i < myLibrary.length; i++){
        // myLibrary[i].info()
        let newElement = document.createElement('h1')
        newElement.textContent = myLibrary[i].info()
        bookDiv.appendChild(newElement)
    }
}


const addBook = document.querySelector("#addBook")
addBook.addEventListener("click", addBooks) 