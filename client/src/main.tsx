import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Movies from './pages/Movies.tsx';
import TVShows from './pages/TVShows.tsx';
import Library from './pages/Library.tsx';
import Contact from './pages/Contact.tsx';
import Details from './pages/Details.tsx';
// Protected Route Component
import Auth from './utils/auth.ts';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return Auth.loggedIn() ? element : <Navigate to="/Movies" replace />;
};
export default ProtectedRoute;
import { useParams } from 'react-router-dom';
const DetailsWrapper = () => {
  const { id } = useParams();
  return <Details id={Number(id)} />;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: Auth.loggedIn() ? <Navigate to="/Movies" replace /> : <Login />,
      },
      {
        path: '/Movies',
        element: <ProtectedRoute element={<Movies />} />,
      },
      {
        path: '/TVShows',
        element: <ProtectedRoute element={<TVShows />} />,
      },
      {
        path: '/Library',
        element: <ProtectedRoute element={<Library />} />,
      },
      {
        path: '/Contact',
        element: <ProtectedRoute element={<Contact />} />,
      },
      {
        path: '/Details/:id',
        element: <ProtectedRoute element={<DetailsWrapper />} />,
      },
      {
        path: '/Signup',
        element: <ProtectedRoute element={<SignUp />} />,
      },
    ],
  },
]);
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}








