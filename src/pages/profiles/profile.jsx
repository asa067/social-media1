import './profile.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/5732095/pexels-photo-5732095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/10590751/pexels-photo-10590751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com">
              <TwitterIcon />
            </a>
            <a href="https://www.linkedin.com">
              <LinkedInIcon />
            </a>
            <a href="https://www.pinterest.com">
              <PinterestIcon />
            </a>
          </div>
          <div className="center">
            <span>Asa Chen</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Japan</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Atlas.dev</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  )
}

export default Profile
