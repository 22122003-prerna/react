import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import ParamsComp from "./components/ParamsComp";
const router = createBrowserRouter([
  {
    path:"/",
    element : <div>
      <Navbar/>
      <Home/>
    </div>
    
    
  },
  {
      path:"/about",
      element : <div>
        <Navbar/>
       <About/>
      </div>
      },
      {
        path:"/dashboard",
        element : <div>
          <Navbar/>
         <Dashboard/>
        </div>
        },
        
          {
            path:"/student/:id",
            element : <div>
             
              <Navbar/>
             <ParamsComp/>
            </div>
        },
]);

function App() {
  

  return (
   <div>
     <RouterProvider router={router} />
   </div>
  )
}

export default App
