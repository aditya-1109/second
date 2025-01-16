import './style/App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from './home';
import Navbar from './navbar';

const Layout=()=>{
  return(
    <>
    <div className='container'>
    <div className='addvertise'>
      <div className='moving-add'>ADDA 367</div>
    </div>
    <Navbar />
    <Outlet />
    </div>
    </>
  )
}

const routes= createBrowserRouter([
  {path: "/", element: <Layout />, children:[
    {path: "/", element: <Home />}
  ]}
])

function App() {
  return (
    
     <RouterProvider router={routes}>
        
     </RouterProvider>
    
  );
}

export default App;
