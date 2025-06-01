import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.books.find(b => b.id == id));

  if (!book) return <p>Book not found</p>;

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border-2 p-5 border-blue-300 bg-blue-200 rounded-2xl'>
      <h2 className='text-9xl'>{book.title}</h2>
      <p className='text-3xl'><strong className='text-5xl'>Author:</strong> {book.author}</p>
      <p className='text-3xl'><strong className='text-5xl'>Description:</strong> {book.description}</p>
      <p className='text-3xl'><strong className='text-5xl'>Rating:</strong> {book.rating}</p>
      <div className='flex justify-center mt-5'>
      <Link className='border-1 rounded-2xl p-2 bg-blue-400 border-blue-400 hover:bg-blue-200 hover:border-blue-200 text-white  ' to="/browse">Back to Browse</Link>
      </div>
      
      </div>
      
    </div>
  );
}

export default BookDetails;
