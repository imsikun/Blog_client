import './topbar.css'
import { Link } from 'react-router-dom';

export default function TopBar () {
  const user = true;
  return (
    <div>
      <div className='top'>
        <div className='topLeft'>
          <i className='topIcon fab fa-facebook-f'></i>
          <i className='topIcon fab fa-instagram'></i>
          <i className='topIcon fab fa-twitter'></i>
          <i className='topIcon fab fa-pinterest'></i>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link to='/' className='link'>HOME</Link>
            </li>
            <li className='topListItem'>
              <Link to='/about' className='link'>ABOUT</Link>
            </li>
            <li className='topListItem'>
              <Link to='/contact' className='link'>CONTACT</Link>
            </li>
            <li className='topListItem'>
              <Link to='/write' className='link'>WRITE</Link>
            </li>
            <li className='topListItem'>
              {user && <Link to='/logout' className='link'>LOGOUT</Link>}
            </li>
          </ul>
        </div>
        <div className='topRight'>
        {user ? (
            <img
            className='topImg'
            src='https://images.pexels.com/photos/3310693/pexels-photo-3310693.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            alt=''
          />
        ):
          (
            <ul className='topList'>
              <li className="topListItem">
            <Link to='/login' className='link'>LOGIN</Link>

              </li>
              <li className="topListItem">

            <Link to='/register' className='link'>REGISTER</Link>
              </li>
          </ul>
          )
        }

          <i className='topSearchIcon fas fa-search'></i>
        </div>
      </div>
    </div>
  )
}
