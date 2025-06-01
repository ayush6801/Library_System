import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BookCard from '../compnentes/BookCard';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [search, setSearch] = useState('');
  

  const filteredBooks = books.filter(book => {
    return (
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
       book.author.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div style={{ padding: '1rem' }}>
      {/* <h2>{category ? `${category} Books` : 'All Books'}</h2> */}
      <div className='flex justify-center'>
      <input
        type="text"
        placeholder=" Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-2 m-0 p-1 rounded-2xl w-3/4"
      />
      </div>
      <div className='flex flex-wrap '>
      {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>
      
     
    </div>
  );
}

export default BrowseBooks;
