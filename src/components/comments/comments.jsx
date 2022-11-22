import './comments.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Comments = () => {
  const { currentUser } = useContext(AuthContext)
  //Tempo
  const comments = [
    {
      id: 1,
      name: 'apple',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/14075662/pexels-photo-14075662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipifin nejk njjn jqoqopf',
    },
    {
      id: 2,
      name: 'banana',
      userId: 3,
      profilePic:
        'https://images.pexels.com/photos/14284974/pexels-photo-14284974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'jndnlka znoiep aqwf jijoqi',
    },
    {
      id: 3,
      name: 'candy',
      userId: 4,
      profilePic:
        'https://images.pexels.com/photos/14324906/pexels-photo-14324906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'iwhuioq jiekij qpajz zmiowi.',
    },
  ]
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments
