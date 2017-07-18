/**
 * Created by dolphin on 15/7/2017.
 */
export function searchBook(isbn) {
    return {
        type: "SEARCH_BOOK_BY_ISBN",
        payload: isbn
    };
}

export function findBooksByName(books) {
    console.log(books);
    return {
        type: "FIND_BOOKS_BY_NAME",
        books: books
    };
}

export function searchBookById(book) {
    return {
        type: "SEARCH_BOOK_BY_ID",
        book: book
    };
    /*return dispatch => {
     setTimeout(() => {
     dispatch({
     type: "SEARCH_BOOK_BY_ID",
     name: name
     });
     }, 2000);
     };*/
}