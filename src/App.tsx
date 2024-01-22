import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root/Root';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    },
  ])
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
