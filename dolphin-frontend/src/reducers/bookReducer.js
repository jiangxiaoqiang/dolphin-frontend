/**
 * Created by dolphin on 15/7/2017.
 */


const bookReducer = (state = {
    name: 'bookname',
    isbn: '',
    author: '',
    publisher: '',
    price: ''
}, action) => {
    switch (action.type) {
        case "SEARCH_BOOK_BY_ID":
            state = {
                name: action.book.name,
                isbn: action.book.isbn,
                author: action.book.author,
                publisher: action.book.publisher,
                price: action.book.price
            };
            break;
        case "SEARCH_BOOK_BY_ISBN":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

export default bookReducer;