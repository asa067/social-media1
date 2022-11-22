import './navBar.scss'
import HomeIcon from '@mui/icons-material/Home'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { AuthContext } from '../../context/authContext'

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>AtlasSocial</span>
        </Link>
        <HomeIcon />
        {darkMode ? (
          <DarkModeIcon onClick={toggle} />
        ) : (
          <WbSunnyIcon onClick={toggle} />
        )}

        <AppsIcon />
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonIcon />
        <EmailIcon />
        <NotificationsIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
