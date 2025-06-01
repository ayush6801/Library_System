import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="bg-amber-100 h-15">
        <nav className="flex gap-5 text-3xl justify-center font-bold text-blue-500">
            <Link to="/" className="mt-3">Home</Link>
            <Link to="/browse" className="mt-3">Browse Books</Link>
            <Link to="/add" className="mt-3">Add Book</Link>
        </nav>
        </div>
    )
}
export default Navbar;