import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )
  const login = () => {
    //TO DO
    setCurrentUser({ id: 1, name: "Asa Chen", profilePic: "https://images.pexels.com/photos/8342074/pexels-photo-8342074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })
  }
  useEffect(() => {
    /*  不能将对象存储在localStorage，需要转化为字符串*/
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}