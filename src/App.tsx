import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Contact } from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>Root</>,
    loader: () =>
      new Promise((res) => {
        return setTimeout(() => res('Olá'), 3000);
      }),
  },
  {
    path: 'contact',
    children: [
      { index: true, element: <>Contact</> },
      {
        path: ':id',
        element: <Contact />,
        loader: ({ params }) =>
          new Promise((res) => {
            console.log(params);
            res('Olá mundo');
          }),
      },
    ],
  },
  { path: 'dashboard', element: <>Dashboard</> },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" index element={<>Root</>} />
//       <Route path="dashboard" element={<>Dashboard</>} />
//       <Route path="contact" element={<>Contact</>} />
//     </Route>
//   )
// );

function App() {
  return <RouterProvider router={router} />;
}

export default App;
