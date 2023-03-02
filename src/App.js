import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main'
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import CategoryDetail from './components/CategoryDetail/CategoryDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
          },
          element: <Home></Home>
        },
        // {
        //   path: 'categories/idCategory',
        //   loader: async ({params}) => {
        //     return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.idCategory}`)
        //   },
        //   element: <CategoryDetail></CategoryDetail>
        // }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider 
      router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
