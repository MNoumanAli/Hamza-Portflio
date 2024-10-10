import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"

const App = () => {''
    const router = createBrowserRouter([
        {
            path : '/',
            element : <Navbar/>,
            children : [
                {
                    path : '/',
                    element : <Home/>
                },
                {
                    path : '/about',
                    element : <div>About</div>
                },
                {
                    path : '/work',
                    element : <div>Work</div>
                },
                {
                    path : '/service',
                    element : <div>Work</div>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default App;