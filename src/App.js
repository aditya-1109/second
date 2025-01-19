import './style/App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';

const Layout=()=>{
  return(
    <>
    <div className='Layout-container'>
    <div className='addvertise'>
      <div className='moving-add'>ADDA 367</div>
    </div>
    <Navbar />
    
    <Outlet />
    <Footer />
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
