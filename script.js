const myLibrary = [];


class Book {
    constructor(id, name, author, page, read){
        this.id = id;
        this.name = name;
        this.author = author;
        this.page = page;
        this.read = read;
    }
    checkRead(){
        return (this.read === true ? "This book is read." : "This book is not read.");
    }
    info(){
        return this.name + ", " + this.author + ", " + this.page + ", " + this.checkRead();
    }
}


function addBookToLibrary(name, author, page, read) {
    let newBook = new Book(crypto.randomUUID(), name, author, page, read);
    myLibrary.push(newBook);

}

Book.prototype.updateRead = function () {
    this.read = !this.read;
    
}

addBookToLibrary("Charlotte", "David Foenkinos", 254, true);
addBookToLibrary("Le Gai savoir", "Nietzsche", 448, false);
addBookToLibrary("Crîme et Châtiment", "Fiodor Dostoïevski", 728, false);
addBookToLibrary("L'Etranger", "Alber Camus", 200, true);

const booksDom = [];
const removeDom = [];

function display() {
    let list = document.querySelector(".list");
    list.textContent = "";
    for (let i in myLibrary) {
        let x = document.createElement("div");
        x.textContent = myLibrary[i].info();
        x.textContent += "  ";
        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            display();
        });
        let toggle = document.createElement("button");
        toggle.textContent = "read";
        toggle.addEventListener("click", () => {
            myLibrary[i].updateRead();
            display();
        })
        x.appendChild(toggle);
        x.appendChild(btn);
        list.appendChild(x);
        
    }
}

let button = document.querySelector(".ass");
let form = document.querySelector("form");
button.addEventListener("click", () => {
    form.style["display"] = "flex";
    button.style["display"] = "none";
})



form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let page = document.getElementById("page").value;
    let read = document.querySelector('input[name="read"]:checked').value;
    read = read === "yes";
    addBookToLibrary(name, author, page, read);
    display();
    
})

display();

