import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Home from "./pages/home/home"
import Profile from "./pages/profiles/profile"

import Navbar from "./components/navbar/NavBar"
import LeftBar from "./components/leftbar/LeftBar"
import RightBar from "./components/rightbar/RightBar"

import "./style.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { AuthContext } from "./context/authContext"


function App () {
  const { currentUser } = useContext(AuthContext)
  const { darkMode } = useContext(DarkModeContext)
  console.log(darkMode)
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 7 }}>
            <Outlet />
          </div>

          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      /* 用protect包裹Layout */
      element: <ProtectRoute><Layout /></ProtectRoute>,

      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }

      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
