/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// ===========================Task 02.01. Basic Types========================

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

interface Book {
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

type library = { lib: string; books: number; avgPagesPerBook: number };

type CreateCustomerID = (name: string, id: number) => string;
// 01
function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        {
            id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript
        },
        {
            id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: true, category: Category.JavaScript
        },
        {
            id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: false, category: Category.CSS
        },
        {
            id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: false, category: Category.JavaScript
        }
    ];

    return books;
}


// 02
function logFirstAvailable(booksArray: readonly Book[] = getAllBooks()): void {
    const booksCount: number = booksArray.length;
    const firstAvailableBook: Book = booksArray.find(book => book.available);

    const nameFirstAvailableBook = firstAvailableBook?.title;

    console.log(booksCount, nameFirstAvailableBook);
}

// 03


// 04
function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
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

// 07
const libraries: readonly library[] = <const>[
    {
        lib: 'libName1', books: 1_000_000_000,
        avgPagesPerBook: 250
    },
    {
        lib: 'libName2', books: 5_000_000_000,
        avgPagesPerBook: 300
    },
    {
        lib: 'libName3', books: 3_000_000_000,
        avgPagesPerBook: 280
    }
];
function calcTotalPages(libraries: library[]): bigint {
    const result = libraries.reduce((acc, library) => {
        return acc + library.books * library.avgPagesPerBook;
    }, 0);
    return BigInt(result);

}

// ===========================Task 02.02. Const Assertions===================

// 01


// ===========================Task 03.01. Functional Type=====================

// 01
const createCustomerID: CreateCustomerID = function (name, id) {

    return `User name - ${name}, user id - ${id}`;

};

// 02
let myID: string = createCustomerID('Ann', 10);

console.log(myID);

// 03
const idGenerator: typeof createCustomerID = (name, id) => {
    return `User name - ${name}, user id - ${id}`;
};

// 04
console.log(idGenerator('Vlad', 500));

// ===========================Task 03.02. Optional, Default and Rest Parameters=====================

// 01
type CreateCustomer = (name: string, age?: number, city?: string) => void;
const createCustomer: CreateCustomer = function (name, age, city) {
    console.log(`Name is ${name}`);
    if (age) console.log(`Age is ${age}`);
    if (city) console.log(`City is ${city}`);
};

createCustomer('Vlad');
createCustomer('Vlad', 20);
createCustomer('Vlad', 20, 'New York');

// 02
console.log(getBookTitlesByCategory());

// 03

logFirstAvailable();

// 04
type GetBookById = (id: number) => Book;
const getBookById: GetBookById = function (id) {
    const books = getAllBooks();
    const foundBook = books.find(book => book.id === id);
    return foundBook;
};

console.log(getBookById(1));

// 05
type CheckoutBooks = (customer: string, ...bookIDs: number[]) => string[];
const checkoutBooks: CheckoutBooks = function (customer, ...bookIDs) {
    const books = getAllBooks();
    const selectedAvailableBookTitles: string[] = [];

    const availableBooks = bookIDs.forEach(id => {
        const selectedBook: Book = getBookById(id);
        if (selectedBook?.available) {
            selectedAvailableBookTitles.push(selectedBook.title);
        }
    });
    console.log(`Customer - ${customer}`);
    return selectedAvailableBookTitles;
};

// 06
const myBooks = checkoutBooks('Ann', 1, 2, 4);

console.log(myBooks);

// ===========================Task 03.03. Function Overloading=====================

// 01

// 02

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg)?.map(book => book.title);
        }

        if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg)?.map(book => book.title);
        }
    }
    if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
    return [];
}

// 03
const checkedOutBooks = getTitles(false);

console.log(checkedOutBooks);



// ===========================Task 03.04. Assertion Functions=====================

// 01

// ===========================Task 04.01. Defining an Interface=====================

// 01
// ======================================================

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

