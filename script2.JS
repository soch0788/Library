

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
let bookList = []

function bookBTN() {
    while (bookDiv.firstChild){
        bookDiv.removeChild(bookDiv.firstChild)
        }
        bookbTN.classList.add("Hidden")
    let BTNchecker = document.querySelector(".Submit")
    if(!BTNchecker){ 
        let newBTN = document.createElement('button')
        let newBookTitle = document.createElement('input')
        let newBookAuthor = document.createElement('input')
        let newBookPagecount = document.createElement('input')
        let newBookstatusDec = document.createElement('label')
        let newBookstatus = document.createElement('input')
        
        newBookstatusDec.textContent = "Read"
        newBookstatus.type = "checkbox"
        newBookstatus.value = "Read"
        newBookstatus.className = "checkstatus"
        newBookTitle.className = "newTitle"
        newBookTitle.placeholder = "Book Title"
        newBookTitle.required = "required"
        newBookPagecount.type = "number"

        newBookAuthor.className = "newAuthor"
        newBookAuthor.placeholder = "Author"
        
        newBookPagecount.className = "newpage"
        newBookPagecount.placeholder = "Page Count"

        newBTN.textContent = "Submit Book"
        newBTN.className = "Submit"
        
        bookAddDiv.appendChild(newBookTitle)
        bookAddDiv.appendChild(document.createElement('br'))
        bookAddDiv.appendChild(newBookAuthor)
        bookAddDiv.appendChild(document.createElement('br'))
        bookAddDiv.appendChild(newBookPagecount)
        bookAddDiv.appendChild(document.createElement('br'))
        bookAddDiv.appendChild(newBookstatus)
        bookAddDiv.appendChild(newBookstatusDec)
        bookAddDiv.appendChild(document.createElement('br'))
        
        bookAddDiv.appendChild(newBTN)
        
        const addBook = document.querySelector(".Submit")
        addBook.addEventListener("click", addBooks) 
    }
}
function showbooks (){
    // console.log(bookAddDiv)
    bookbTN.classList.remove("Hidden")
    while (bookAddDiv.firstChild){
    bookAddDiv.removeChild(bookAddDiv.firstChild)
    }
    for (let i = 0; i < bookList.length;i++){
        bookDiv.appendChild(bookList[i])
    }
}

function addBooks(){
    if(document.querySelector(".newTitle").value != "" && document.querySelector(".newAuthor").value != "" && document.querySelector(".newpage").value != "" ){
    let readstatus = "unread"
    if(document.querySelector(".checkstatus").checked == true){
        readstatus = "read"
    }
    let book = new newTitle(document.querySelector(".newTitle").value,document.querySelector(".newAuthor").value,document.querySelector(".newpage").value,readstatus)
    let newElement = document.createElement('h1')
    newElement.textContent = book.info()
    bookList.push(newElement)
    showbooks()
    }
    
}


const bookbTN = document.querySelector("#addBook")
bookbTN.addEventListener("click", bookBTN)