import { createContext, useEffect, useState } from "react"

export const DarkModeContext = createContext()
//创建了一个context API，在组件中需要使用darkMode和toggle
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    //检查本地存储中darkMode的值为true还是false
    JSON.parse(localStorage.getItem("darkMode")) || false
  )
  /*   切换darkmode */
  const toggle = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])
  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  )
}