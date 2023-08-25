const container = document.querySelector('main')
const newBookDialog = document.querySelector('dialog')
const check = document.querySelector('.check')

const myLibrary = [{
    title:'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 295,
    read: false,
},{
    title:'Pintya',
    author: 'J.R.R. Tolkien',
    pages: 295,
    read: true,
}];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

myLibrary.forEach(book => {
    addBookToLibrary(book)
})


document.querySelector('#addBook').addEventListener('click',_ => {
    newBookDialog.showModal()
})

document.querySelector('#cancel').addEventListener('click',_=>{
    newBookDialog.close()
})

function random(){
    let book = {title: title.value, author: author.value, pages: pages.value, read: read.checked}
    myLibrary.push(book)
    addBookToLibrary(book)
    event.preventDefault()
    newBookDialog.close()
}

function checkValue(check){
    console.log(check)
}

function addBookToLibrary(book) {
    const div = document.createElement('div')
    div.style.background = 'pink'
    div.style.border = '2px solid black'
    container.appendChild(div)
    const title = document.createElement('h2')
    title.textContent = book.title
    const author = document.createElement('h2')
    author.textContent = book.author
    const pages = document.createElement('h2')
    pages.textContent = book.pages + ' pages'
    const read = document.createElement('input')
    read.type = "checkbox"
    read.setAttribute("name","read")
    if(book.read == true){
        read.setAttribute("checked",true)
    }
    const label = document.createElement('label')
    label.textContent = "Completed"
    label.setAttribute("for","read")
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(read)
    div.appendChild(label)
}