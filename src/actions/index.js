export const BOOK_SELECTED = 'BOOK_SELECTED';

export function selectBook(id) {
    console.log('book has been selected', id);
    return {
        type: BOOK_SELECTED,
        payload: id
    }
}