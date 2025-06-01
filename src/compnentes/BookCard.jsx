import {Link} from 'react-router-dom';

function BookCard({book})
{
    return(
        <div className="border-1 rounded-2xl m-2 mt-5 w-48 p-3">
            <h3 className='text-3xl'>{book.title}</h3>
            <p><span className='font-bold'>Author:</span> {book.author}</p>
            <p><span className='font-bold'>Category:</span> {book.category}</p>
            <p className='mt-4'></p>
            <Link to={`/books/details/${book.id}`} className='border-1 rounded-2xl p-2 bg-blue-400 border-blue-400 hover:bg-red-500 hover:border-red-500 text-white  '>View Details</Link>
        </div>
    );
}
export default BookCard;