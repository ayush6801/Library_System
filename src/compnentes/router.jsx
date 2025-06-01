import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import BrowseBooks from '../pages/BrowseBook';
import BookDetails from '../pages/BookDetails';
import AddBook from '../pages/AddBook';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'browse', element: <BrowseBooks /> },
      { path: 'books/:category', element: <BrowseBooks /> },
      { path: 'books/details/:id', element: <BookDetails /> },
      { path: 'add', element: <AddBook /> },
      { path: '*', element: <NotFound /> },
    ]
  }
]);

export default router;
