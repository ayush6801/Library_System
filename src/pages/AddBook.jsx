import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../utils/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', category: '', description: '', rating: '' });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError('All fields are required');
      return;
    }
    dispatch(addBooks(form));
    navigate('/browse');
  };

  return (

        <div className='flex justify-center items-center h-screen'>
            <div className='border-2 border-blue-50 p-6 rounded-2xl mb-8 bg-blue-50'>
            <h2 className='text-5xl m-2 font-bold'>Add a New Book</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='flex justify-center'>
            <form onSubmit={handleSubmit}>
            <input placeholder="Title" className='border-2 p-2 m-2 rounded-2xl w-88' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} /><br />
            <input placeholder="Author" className='border-2 p-2 m-2 rounded-2xl  w-88' value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} /><br />
            <input placeholder="Category"  className='border-2 p-2 m-2 rounded-2xl w-88' value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} /><br />
            <textarea placeholder="Description" className='border-2 p-2 m-2 rounded-2xl  w-88' value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} /><br />
            <input placeholder="Rating" type="number" className='border-2 p-2 m-2 rounded-2xl w-88' max="5" step="0.1" value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })} /><br />
            <div className='flex justify-center'>
            <button className='border-1 rounded-2xl p-2 bg-blue-400 border-blue-400 hover:bg-blue-200 hover:border-blue-200 text-white  ' type="submit ">Add Book</button>
            </div>
            
        </form>
            </div>
       
            </div>
            
        </div>

    
  );
}

export default AddBook;
