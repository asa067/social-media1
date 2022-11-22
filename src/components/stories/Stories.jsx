import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './stories.scss'

const Stories = () => {
  const { currentUser } = useContext(AuthContext)
  //TEMPORARY DATA
  const stories = [
    {
      id: 1,
      name: 'apple',
      img: 'https://images.pexels.com/photos/12050399/pexels-photo-12050399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'banana',
      img: 'https://images.pexels.com/photos/14254153/pexels-photo-14254153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'candy',
      img: 'https://images.pexels.com/photos/14036568/pexels-photo-14036568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}
export default Stories
