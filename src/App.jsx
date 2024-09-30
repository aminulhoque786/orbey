import {
  createBrowserRouter,
  RouterProvider, Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";

let router = createBrowserRouter(createRoutesFromElements(

<Route  element={<Layout />} >
<Route index element={<Home />}  ></Route>


</Route>

))


function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
