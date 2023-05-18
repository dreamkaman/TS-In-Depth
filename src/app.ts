showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ===========================Task 02.01. Basic Types========================

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

type titleAuthor = [title: string, author: string];

// 01
function getAllBooks(): Book[] {
    const books: Book[] = [
        {
            id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript
        },
        {
            id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript
        },
        {
            id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS
        },
        {
            id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript
        }
    ];

    return books;
}


// 02
function logFirstAvailable(booksArray: Book[]): void {
    const booksCount: number = booksArray.length;
    const firstAvailableBook: Book = booksArray.find(book => book.available);

    const nameFirstAvailableBook = firstAvailableBook?.title;

    console.log(booksCount, nameFirstAvailableBook);
}

// 03


// 04
function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks();
    const filteredBooks = books.filter(book => book.category === category);
    const namesFilteredBooks = filteredBooks?.map(book => book.title);

    return namesFilteredBooks;
}

// 05
function logBookTitles(booksTitles: string[]): void {
    console.log(booksTitles);
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// 06
function getBookAuthorByIndex(index: number): titleAuthor {
    const allBooks = getAllBooks();
    const bookByIndex = allBooks[index];
    const { title, author } = bookByIndex;
    return [title, author];
};
getBookAuthorByIndex(10);
// ===========================Task 02.02. Const Assertions===================

// 01

// ===========================Task 03.01. Functional Type=====================

// 01

// ===========================Task 03.02. Optional, Default and Rest Parameters=====================

// 01

// ===========================Task 03.03. Function Overloading=====================

// 01

// ===========================Task 03.04. Assertion Functions=====================

// 01

// ===========================Task 04.01. Defining an Interface=====================

// 01

// ===========================Task 04.02. Defining an Interface for Function Types=====================

// 01

// ===========================Task 04.03 Extending Interfaces=====================

// 01

// ===========================Task 04.04. Optional Chaining=====================

// 01

// ===========================Task 04.05. keyof operator=====================

// 01

// ===========================Task 05.01. Creating and Using Classes=====================

// 01

// ===========================Task 05.02. Extending Classes=====================

// 01

// ===========================Task 05.03. Abstract Classes=====================

// 01

// ===========================Task 05.04. Implementing Interfaces by Classes=====================

// 01

// ===========================Task 05.05. Intersection and Union Types=====================

// 01

// ===========================Task 06.01. Namespaces Usage=====================

// 01

// ===========================Task 06.02. Export and Import=====================

// 01

// ===========================Task 06.03. Default Export=====================

// 01

// ===========================Task 06.04. Re-Export=====================

// 01

// ===========================Task 06.05. Dynamic import expression=====================

// 01

// ===========================Task 06.06. Type-only imports and exports=====================

// 01

// ===========================Task 07.01. Generic functions=====================

// 01

// ===========================Task 07.02. Generic interfaces and classes=====================

// 01

// ===========================Task 07.03. Generic constraints=====================

// 01

// ===========================Task 07.04. Utilities=====================

// 01

// ===========================Task 07.05. Mapped types, conditional types=====================

// 01

// ===========================Task 08.01. Class decorator=====================

// 01

// ===========================Task 08.02. Class decorator=====================

// 01

// ===========================Task 08.03. Method decorator=====================

// 01

// ===========================Task 08.04. Method decorator=====================

// 01

// ===========================Task 08.05. Parameter decorator=====================

// 01

// ===========================Task 08.06. Property decorator=====================

// 01

// ===========================Task 08.07. Accessors decorator=====================

// 01

// ===========================Task 09.01. Callback function=====================

// 01

// ===========================// Task 09.02. Promises=====================

// 01

// ===========================// Task 09.03. Async functions=====================

// 01

