import './leftBar.scss'
import Friends from '../../assets/friends.png'
import Groups from '../../assets/group.png'
import Market from '../../assets/market.png'
import Watch from '../../assets/watch.png'
import Memories from '../../assets/memories.png'

import Events from '../../assets/events.png'
import Gaming from '../../assets/game.png'
import Gallery from '../../assets/gallery.png'
import Video from '../../assets/video.png'
import Message from '../../assets/messages.png'
import { AuthContext } from '../../context/authContext'
import { useContext } from 'react'

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Video} alt="" />
            <span>Video</span>
          </div>
          <div className="item">
            <img src={Message} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
