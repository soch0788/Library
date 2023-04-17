

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
        let removeBTN = document.createElement("button")
        let readStatuschanger = document.createElement("button")
        readStatuschanger.classList.add(`statuschange${i}`)
        readStatuschanger.classList.add("statuschange")
        removeBTN.classList.add(`remove${i}`)
        removeBTN.classList.add(`removeButton`)
        readStatuschanger.id = `${i}`
        readStatuschanger.textContent = "Finished"
        removeBTN.textContent = "remove book"
        let bookgroup = document.createElement("div")
        bookgroup.classList.add(i)
        bookgroup.classList.add(`bookCard${i}`)
        bookgroup.appendChild(bookList[i])
        bookgroup.appendChild(readStatuschanger)
        bookgroup.appendChild(removeBTN)
        bookDiv.appendChild(bookgroup)
    }
        let statuschangers = document.querySelectorAll(".statuschange")
        statuschangers.forEach(a=> a.addEventListener("click",changeReadStatus))

        let removeBTN = document.querySelectorAll(".removeButton")
        removeBTN.forEach(a=> a.addEventListener("click",removeBook))
}

function removeBook () {
    let lenOfClass = this.classList[0].length-6
    let k = this.classList[0].slice(this.classList[0].length - lenOfClass,)
    
    console.log(k)
    bookList.splice(k,1)
    bookBTN()
    showbooks()
    // bookList = tempList
}


function changeReadStatus() {
    let j = this.id
    let grabber = document.querySelector(`.bookCard${j}>div>h2`)
    if(grabber.textContent == "unread"){
        grabber.textContent = "read"
    }
    else if(grabber.textContent == "read") {
        grabber.textContent = "unread"
    }
}


function addBooks(){
    if(document.querySelector(".newTitle").value != "" && document.querySelector(".newAuthor").value != "" && document.querySelector(".newpage").value != "" ){
    let readstatus = "unread"
    if(document.querySelector(".checkstatus").checked == true){
        readstatus = "read"
    }
    let book = new newTitle(document.querySelector(".newTitle").value,document.querySelector(".newAuthor").value,document.querySelector(".newpage").value,readstatus)
    let newtitle = document.createElement('h1')
    let newauthor = document.createElement('h1')
    let newpagecount = document.createElement('h1')
    let newreadstatus = document.createElement('h2')
    newtitle.textContent = `Title: ${book.title}`
    newauthor.textContent = `Author: ${book.author}`
    newpagecount.textContent = `${book.pages} pages`
    newreadstatus.textContent = book.status
    let bookText = document.createElement('div')
    bookText.appendChild(newtitle)
    bookText.appendChild(newauthor)
    bookText.appendChild(newpagecount)
    bookText.appendChild(newreadstatus)
    bookList.push(bookText)
    showbooks()
    }
    
}


const bookbTN = document.querySelector("#addBook")
bookbTN.addEventListener("click", bookBTN)
showbooks()