import './register.scss'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Challenges are what make life interesting; overcoming them is what
            makes life meaningful.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
