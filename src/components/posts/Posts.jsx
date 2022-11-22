import Post from '../post/Post'
import './posts.scss'

const Posts = () => {
  //TEMPORARY DATA
  const posts = [
    {
      id: 1,
      name: 'apple',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/14075662/pexels-photo-14075662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img: 'https://images.pexels.com/photos/12050399/pexels-photo-12050399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipifin nejk njjn jqoqopf',
    },
    {
      id: 2,
      name: 'banana',
      userId: 3,
      img: 'https://images.pexels.com/photos/14254153/pexels-photo-14254153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      img: 'https://images.pexels.com/photos/14036568/pexels-photo-14036568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'iwhuioq jiekij qpajz zmiowi.',
    },
  ]
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <Post post={post} key={post.id} />
        </div>
      ))}
    </div>
  )
}
export default Posts
