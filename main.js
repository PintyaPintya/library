class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        book.render();
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    render() {
        const container = document.getElementById('container');
        const div = document.createElement('div');
        div.classList.add('book-container');
        const title = document.createElement('h2');
        title.textContent = this.title;
        const author = document.createElement('h2');
        author.textContent = this.author;
        const pages = document.createElement('h2');
        pages.textContent = this.pages + ' pages';
        const read = document.createElement('input');
        read.type = 'checkbox';
        read.setAttribute('name', 'read');
        read.checked = this.read;
        const label = document.createElement('label');
        label.textContent = 'Completed';
        label.setAttribute('for', 'read');

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(label);

        container.appendChild(div);
    }
}

const myLibrary = new Library();

const initialBooks = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: false,
    },
    {
        title: 'Pintya',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: true,
    },
];

initialBooks.forEach(bookData => {
    const book = new Book(bookData.title, bookData.author, bookData.pages, bookData.read);
    myLibrary.addBook(book);
});

function onPressSubmitBtn() {
    let book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.addBook(book);
    event.preventDefault();
    newBookDialog.close();
    document.querySelector('form').reset();
}

document.getElementById('addBook').addEventListener('click', () => {
    document.getElementById('newBookDialog').showModal();
});

document.getElementById('cancel').addEventListener('click', () => {
    closeDialog();
});

function closeDialog() {
    document.getElementById('newBookDialog').close();
}