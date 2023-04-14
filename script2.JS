

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


let bookDiv = document.querySelector(".book")
let bookAddDiv = document.querySelector(".newBook")

function bookBTN() {
    let BTNchecker = document.querySelector(".Submit")
    if(!BTNchecker){ 
        let newBTN = document.createElement('button')
        let newBookTitle = document.createElement('input')
        let newBookAuthor = document.createElement('input')
        let newBookPagecount = document.createElement('input')
        let newBookstatusDec = document.createElement('p')
        let newBookstatus = document.createElement('input')
        
        newBookstatusDec.textContent = "Read"
        newBookstatus.type = "checkbox"
        newBookstatus.classname = "status"
        newBookTitle.className = "newTitle"
        newBookTitle.placeholder = "Book Title"
        newBookTitle.required = "required"

        newBookAuthor.className = "newAuthor"
        newBookAuthor.placeholder = "Author"
        
        newBookPagecount.className = "newpage"
        newBookPagecount.placeholder = "Page Count"

        newBTN.textContent = "Submit Book"
        newBTN.className = "Submit"
        
        bookAddDiv.appendChild(newBookTitle)
        bookAddDiv.appendChild(newBookAuthor)
        bookAddDiv.appendChild(newBookPagecount)
        bookAddDiv.appendChild(newBookstatusDec)
        bookAddDiv.appendChild(newBookstatus)
        bookAddDiv.appendChild(newBTN)
        
        const addBook = document.querySelector(".Submit")
        addBook.addEventListener("click", addBooks) 
    }
}
// function removeBookAdder (){

// }

function addBooks(){
    if(document.querySelector(".newTitle").value != "" && document.querySelector(".newAuthor").value != "" && document.querySelector(".newpage").value != "" ){
    console.log(document.querySelector(".status").checked)
        // if(document.querySelector(".status").value == "checked"){}
    let book = new newTitle(document.querySelector(".newTitle").value,document.querySelector(".newAuthor").value,document.querySelector(".newpage").value)
    let newElement = document.createElement('h1')
    newElement.textContent = book.info()
    bookDiv.appendChild(newElement)
    // removeBookAdder()
    }
    
}


const bookbTN = document.querySelector("#addBook")
bookbTN.addEventListener("click", bookBTN)