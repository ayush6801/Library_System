import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    books: [
        {
            id: 1,
            title: 'abc',
            author: 'def',
            category: 'Sci-Fi',
            description: 'dsaflsdfk',
            rating: 4.0
        },
        {
            id: 2,
            title: 'sdf',
            author: 'klda',
            category: 'Fiction',
            description: 'kdjsfnklcdsk',
            rating: 4.6
        }
    ]
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBooks(state,action){
            state.books.push({id: Math.random,...action.payload });
        }
    }
});
export const {addBooks}=bookSlice.actions;
export default bookSlice.reducer;