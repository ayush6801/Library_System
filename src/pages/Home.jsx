import { useSelector } from 'react-redux';
import BookCard from '../compnentes/BookCard';

function Home() {
  const books = useSelector(state => state.books.books);

  return (
    <div className="p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Welcome To Online Library</h1>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Popular Books</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
