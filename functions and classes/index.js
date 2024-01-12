/*Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.+

Реализуйте геттер allBooks, который возвращает текущий список книг.+

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.+

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.+

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.+

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.+
*/
class Library {
    #books = [];
    constructor(books) {
        this.#books = books;
    }
    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.filter(book => title == book).toString()) {
            throw new Error("This book is in collection already!");
        }
        this.#books.push(title);
    }

    removeBook(title) {
        let indexBookToDelete = this.#books.indexOf(title);
        if (isNaN(indexBookToDelete)) {
            throw new Error("There is no such book");
        }
        this.#books.splice(indexBookToDelete, 1);
    }

    hasBook(title) {
        return this.#books.indexOf(title) == -1 ? false : true;
    }
}
const myBooks = ["Fahrenheit 451", "Brave new world", "1984"];
const myLibrary = new Library(myBooks);
console.log(`After initialization myLibrary "${myLibrary.allBooks}"`);
myLibrary.addBook("Harry Potter");
console.log(`After adding Harry Potter "${myLibrary.allBooks}"`);
console.log(myLibrary.hasBook("Harry Potter"));
myLibrary.removeBook("Harry Potter");
console.log(`After removing Harry Potter "${myLibrary.allBooks}"`);
console.log(myLibrary.hasBook("Harry Potter"));
