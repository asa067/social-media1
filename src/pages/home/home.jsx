import Posts from '../../components/posts/Posts'
import Stories from '../../components/stories/Stories'
import Profile from '../profiles/profile'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Profile />
      <Posts />
    </div>
  )
}

export default Home
